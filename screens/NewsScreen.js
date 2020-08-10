import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, View, Button } from 'react-native';
import { Card, Divider, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import * as data from '../components/data/data.json';

export default function NewsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={require('../assets/images/bhaktabhandav.png')}
            style={styles.welcomeImage}
          />
        </View>

        <View >
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
  const today = ((year) + " " + (month) + " " + (dayOfMonth));

  return (
    data.thisYear2020.map((data) => {

      return (
        <View key={data.monthId}>
          <Card title={data.monthName} />
          <View>
            <ListItem
              key={data.monthId}
              leftElement={() =>
                (<View>
                  <View>
                    <Text>{data.firstEkadasi.dayOfWeek}, {data.monthName} {data.firstEkadasi.dayInMonth}</Text>
                    <Divider style={{ backgroundColor: 'blue' }} />
                    <Text>{data.secondEkadasi.dayOfWeek}, {data.monthName} {data.secondEkadasi.dayInMonth}</Text>
                    <Divider style={{ backgroundColor: 'blue' }} />
                    <Text>{data.thirdEkadasi.dayOfWeek} {data.thirdEkadasi.dayInMonth}</Text>
                    <Divider style={{ backgroundColor: 'blue' }} />
                  </View>
                </View>
                )}
            />
          </View>
          <Divider style={{ backgroundColor: 'blue' }} />
        </View>
      )
    })
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  NewsScreenFilename: {
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
