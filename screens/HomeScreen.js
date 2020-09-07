import React, { useState, Component } from 'react';
import { Image, Platform, StyleSheet, Text, View, Vibration } from 'react-native';
import { Card, Button, Overlay } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { thisYear2020 } from '../components/data/data-array'



export default class HomeScreen extends Component {

  GetAll = () => {
    const month = new Date().getMonth();
    const dayOfMonth = new Date().getDate();

    return (

      thisYear2020.filter(data => Number(data.monthId) === month && data.dayInMonth >= dayOfMonth).map((data, index) => {
        if ((Number(data.monthId) === month && data.dayInMonth == dayOfMonth)) {
          return (



            <View key={index} >
              <Card
                containerStyle={{ backgroundColor: "#15c240", marginBottom: "10%" }}
                titleStyle={{ color: 'white', fontSize: 30 }}
                title="Today is Ekadasi"
              />
              <Text style={styles.displayEkadasi}>
                {data.dayOfWeek}, {data.monthName} {data.dayInMonth}: {data.ekadasiName}
              </Text>
            </View>
          )

        }

        if ((Number(data.monthId) === month && data.dayInMonth > dayOfMonth) && index == 0) {
          return (
            <View key={index} >
              <Text style={styles.displayEkadasi}>
                {data.dayOfWeek}, {data.monthName} {data.dayInMonth}: {data.ekadasiName}
              </Text>
            </View>
          )
        }

      })





    )
  }


  OverlayNote = () => {
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

  }


  render() {

    return (
      < View style={styles.container} >
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/bhaktabhandav.png')}
              style={styles.welcomeImage}
            />
          </View>


          <Card
            containerStyle={{ backgroundColor: 'rgb(248, 211, 110)' }}
            title={<this.GetAll />}
          />


        </ScrollView >

        <View style={styles.tabBarInfoContainer}>
          <this.OverlayNote />
        </View>

      </View >
    );
  }
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

  todayIsEkadasiStyle: {
    fontSize: 25,
    color: 'white',
    alignSelf: 'center',
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






