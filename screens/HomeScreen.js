import React, { useState, useEffect, Component } from 'react';
import { Image, Platform, StyleSheet, Text, View, Vibration } from 'react-native';
import { Card, Button, Overlay } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import * as data from '../components/data/data.json';
import { list2020 } from '../components/data/list.js';
import { getCurrentFrame } from 'expo/build/AR';
import { render } from 'react-dom';









import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';























export default class HomeScreen extends Component {









  state = {
    expoPushToken: '',
    notification: {},
  };

  registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      this.setState({ expoPushToken: token });
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.createChannelAndroidAsync('default', {
        name: 'default',
        sound: true,
        priority: 'max',
        vibrate: [0, 250, 250, 250],
      });
    }
  };

  componentDidMount() {
    this.registerForPushNotificationsAsync();

    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = notification => {
    Vibration.vibrate();
    console.log(notification);
    this.setState({ notification: notification });
  };

  // Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/dashboard/notifications


  sendPushNotification = async () => {
    const message = {
      to: this.state.expoPushToken,
      sound: 'default',
      title: 'Original Title',
      body: 'And here is the body!',
      data: { data: 'goes here' },
      _displayInForeground: true,
    };
    const response = await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  };






















  render() {
    return (
      <View style={styles.container}>

















        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>








          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text>Origin: {this.state.notification.origin}</Text>
              <Text>Data: {JSON.stringify(this.state.notification.data)}</Text>
            </View>
            <Button title={'Press to Send Notification'} onPress={() => this.sendPushNotification()} />
          </View>









          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/bhaktabhandav.png')}
              style={styles.welcomeImage}
            />
            <Text>Hare Krsna! See below for the date of the next Ekadasi. NOTE: the name of the Ekadasi is stated after the Date.</Text>
          </View>


          <Card
            containerStyle={{ backgroundColor: 'rgb(248, 211, 110)' }}
            title={<TodaysEkadasi />}
          />




        </ScrollView >

        <View style={styles.tabBarInfoContainer}>
          <OverlayNote />
        </View>
      </View >
    );
  }
}


function OverlayNote() {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>

      <Button buttonStyle={[styles.codeHighlightContainer]} title="Tap for important notice..." titleStyle={styles.codeHighlightText} onPress={toggleOverlay} />

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text>NOTE: All dates are for Vrndavana, India. For your local dates tap "Resources" below and tap "Pure Bhakti Calendar." You can configure your local time on Pure Bhatki.</Text>
      </Overlay>

    </View>
  );
};




function TodaysEkadasi() {


  const month = new Date().getMonth();
  const dayOfMonth = new Date().getDate();
  const findNextMonth = data.thisYear2020.find((element) => {
    return element.monthId == month + 1
  })

  return (
    data.thisYear2020.map((data) => {

      if (data.monthId == month && data.firstEkadasi.dayInMonth >= dayOfMonth) {
        return (
          <View key={data.monthId}>
            <Text style={styles.displayEkadasi}>{data.firstEkadasi.dayOfWeek}, {data.monthName} {data.firstEkadasi.dayInMonth}:{data.firstEkadasi.ekadasiName}</Text>
          </View>
        )
      }

      if (data.monthId == month && data.secondEkadasi.dayInMonth >= dayOfMonth) {
        return (
          <View key={data.monthId}>
            <Text style={styles.displayEkadasi}>{data.secondEkadasi.dayOfWeek}, {data.monthName} {data.secondEkadasi.dayInMonth}: {data.secondEkadasi.ekadasiName}</Text>
          </View>
        )
      }

      if (data.monthId == month && data.thirdEkadasi.dayInMonth >= dayOfMonth) {
        return (
          <View key={data.monthId}>
            <Text style={styles.displayEkadasi}>

              {data.thirdEkadasi.dayOfWeek}, {data.monthName} {data.thirdEkadasi.dayInMonth}: {data.thirdEkadasi.ekadasiName}

            </Text>
          </View>
        )
      }

      if ((data.monthId == month) && (data.thirdEkadasi.dayInMonth == undefined)) {
        return (
          <View key={data.monthId}>
            <Text style={styles.displayEkadasi}>
              {findNextMonth.firstEkadasi.dayOfWeek}, {findNextMonth.monthName} {findNextMonth.firstEkadasi.dayInMonth}: {findNextMonth.firstEkadasi.ekadasiName}



            </Text>
          </View>

        )
      }

    })
  )
}



HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  displayEkadasi: {
    fontSize: 25,

  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginBottom: 30
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});



