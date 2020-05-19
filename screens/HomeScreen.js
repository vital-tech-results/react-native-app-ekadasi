import React, { useState } from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import { Card, Button, Overlay } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import * as data from '../components/data/data.json';
import { getCurrentFrame } from 'expo/build/AR';

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
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
  return (

    data.thisYear2020.map((data) => {
      if (data.monthId == month && data.firstEkadasi.dayInMonth > dayOfMonth) {
        return (
          <View key={data.monthId}>
            <Text style={styles.displayEkadasi}>{data.firstEkadasi.dayOfWeek}, {data.monthName} {data.firstEkadasi.dayInMonth}:{data.firstEkadasi.ekadasiName}</Text>
          </View>
        )
      }
      if (data.monthId == month && data.secondEkadasi.dayInMonth > dayOfMonth) {
        return (
          <View key={data.monthId}>
            <Text style={styles.displayEkadasi}>{data.secondEkadasi.dayOfWeek}, {data.monthName} {data.secondEkadasi.dayInMonth}: {data.secondEkadasi.ekadasiName}</Text>
          </View>
        )
      }

      if (data.monthId == month && data.thirdEkadasi.dayInMonth > dayOfMonth) {
        return (
          <View key={data.monthId}>
            <Text style={styles.displayEkadasi}>{data.thirdEkadasi.dayOfWeek}, {data.monthName} {data.thirdEkadasi.dayInMonth}: {data.thirdEkadasi.ekadasiName}</Text>
          </View>
        )
      }




      if (data.monthId == month && data.firstEkadasi.dayInMonth == dayOfMonth) {
        return (
          <View key={data.monthId}>
            <Text style={styles.displayEkadasi}>{data.firstEkadasi.dayOfWeek}, {data.monthName} {data.firstEkadasi.dayInMonth}:{data.firstEkadasi.ekadasiName}</Text>
          </View>
        )
      }
      if (data.monthId == month && data.secondEkadasi.dayInMonth == dayOfMonth) {
        return (
          <View key={data.monthId}>
            <Text style={styles.displayEkadasi}>Today is Ekadasi! {data.secondEkadasi.dayOfWeek}, {data.monthName} {data.secondEkadasi.dayInMonth}: {data.secondEkadasi.ekadasiName} </Text>
          </View>
        )
      }

      if (data.monthId == month && data.thirdEkadasi.dayInMonth == dayOfMonth) {
        return (
          <View key={data.monthId}>
            <Text style={styles.displayEkadasi}>{data.thirdEkadasi.dayOfWeek}, {data.monthName} {data.thirdEkadasi.dayInMonth}: {data.thirdEkadasi.ekadasiName}</Text>
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