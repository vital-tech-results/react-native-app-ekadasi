import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Platform, Linking } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import { RectButton, ScrollView } from 'react-native-gesture-handler';


export default function LinksScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <OptionButton
        icon="md-calendar"
        label="Pure Bhakti Calendar"
        onPress={bhaktiCalendar}
      />

      <OptionButton
        icon="md-school"
        label="Ekadasi Reading Material"
        onPress={kripaTv}
      />

      <OptionButton
        icon="ios-help-buoy"
        label="Contact Support"
        onPress={() => Linking.openURL('mailto:dominick@dominickdesigns.space?subject=Contacting Ekadasi App Support&body=Hare Krsna! I am contating you from the Ekadasi App.')}
        isLastOption
      />




    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}


function bhaktiCalendar() {
  WebBrowser.openBrowserAsync('https://www.purebhakti.com/resources/vaisnava-calendar');
}

function kripaTv() {
  WebBrowser.openBrowserAsync('https://bhakta.org/tag/ekadasi/');
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
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
});