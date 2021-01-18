import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { Image, Platform, StyleSheet, Text, View, Button } from "react-native";
import { Card, Divider, ListItem } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import * as data from "../data/data-array-2021";

export default function NewsScreen() {
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

        <View>
          <CalendarData />
        </View>
      </ScrollView>
    </View>
  );
}

NewsScreen.navigationOptions = {
  header: null,
};

function CalendarData() {
  let year = new Date().getFullYear();
  let month = new Date().getMonth();
  let dayOfMonth = new Date().getDate();
  const today = year + " " + month + " " + dayOfMonth;

  return data.thisYear2021.map(data => {
    return (
      <View key={data.monthId}>
        <Card>
          <View>
            <ListItem key={data.monthId}>
              <ListItem.Content>
                <ListItem.Title style={styles.getStartedText}>
                  {data.dayOfWeek}, {data.monthName} {data.dayInMonth}
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
          </View>
        </Card>
      </View>
    );
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedText: {
    fontSize: 17,
    alignSelf: "center",
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
});
