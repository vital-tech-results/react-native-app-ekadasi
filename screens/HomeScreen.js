import React, { useState, useEffect, useRef } from "react";
import { Image, Platform, StyleSheet, View, Text } from "react-native";
import { Card, Divider } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

import { BlurView } from "expo-blur";

import OverlayNote from "../components/HomeScreenComponents/OverlayNoteComponent";
import GetAll from "../components/HomeScreenComponents/DisplayNextEkadasiComponent";
import schedulePushNotification from "../components/Notifications/ScheduleNotifications";

import ListAllEkadasisThisYear from "../components/ListAllEkadasisThisYear";

schedulePushNotification(); 

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
  handleSuccess: async () => {
    // console.log("setnotificationHandeler in HomeScreen is success");
  },
  handleError: async () => {
    // console.log("error in handler ");
  },
});

export default function HomeScreen() {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const clearAllBadges = () => {
    Notifications.setBadgeCountAsync(0);
  };
  clearAllBadges();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(
      notification => {
        setNotification(notification);
      }
    );

    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      response => {
        Notifications.setBadgeCountAsync(0);
      }
    );

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.welcomeContainer}>
          <Image
            source={require("../assets/images/bhaktabhandav.png")}
            style={styles.welcomeImage}
          />
        </View>
        <Card
          containerStyle={{
            backgroundColor: "rgb(248, 211, 110)",
          }}
        >
          <Card.Title>The Next Ekadasi is...</Card.Title>
          <Card.Divider />
          <GetAll />
        </Card>
        <Divider
          style={{
            backgroundColor: "rgb(248, 211, 110)",
            padding: 5,
            marginTop: 50,
            marginBottom: 50,
          }}
        />
        <BlurView intensity={10} tint="dark">
          <Text style={styles.getStartedText}>
            Scroll to view list of all Ekadasi dates for 2021 (Vrndavana time
            zone). To view Ekadasi dates for your local time zone, tap the
            "PureBhakti" tab below and configure your time zone there.
          </Text>
        </BlurView>

        <ListAllEkadasisThisYear />
      </ScrollView>
      <View style={styles.tabBarInfoContainer}>
        <OverlayNote />
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const {
      status: existingStatus,
    } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = await Notifications.requestPermissionsAsync({
        ios: {
          allowAlert: true,
          allowBadge: true,
          allowSound: true,
          allowAnnouncements: true,
        },
      });

      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    // console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  contentContainer: {
    paddingTop: 30,
    paddingBottom: 150,
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginBottom: 30,
  },

  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "left",
    padding: 30,
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20,
  },
});
