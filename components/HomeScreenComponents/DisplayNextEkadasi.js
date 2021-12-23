import React, { Component } from "react";
import { Platform, StyleSheet } from "react-native";
import { thisYear2022 } from "../../data/data-array-2022";

import NextEkadasiIs from "./NextEkadasiIs";
import TomorowIsEkadasi from "./TomorrowIsEkadasi";
import TodayIsEkadasi from "./TodayIsEkadasi";

class DisplayNextEkadasi extends Component {
  state = {
    visible: true,
    month: new Date().getMonth(),
    dayOfMonth: new Date().getDate(),
    dayOfMonthPlusOne: new Date().getDate() + 1,
  };

  toggleOverlay = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const { month, dayOfMonth, dayOfMonthPlusOne } = this.state;

    return thisYear2022
      .filter(data => {
        if (Number(data.monthId) === month && data.dayInMonth >= dayOfMonth) {
          return data;
        } else if (
          Number(data.monthId) === month + 1 &&
          data.dayInMonth < dayOfMonth + 14
        ) {
          return data;
        } else if (
          Number(data.monthId) === 0 &&
          data.dayInMonth < dayOfMonth + 14
        ) {
          return data;
        }
      })
      .map((data, index) => {
        const monthIdEqualsMonth = Number(data.monthId) === month;
        const dataDayInMonth = Number(data.dayInMonth);

        if (monthIdEqualsMonth && dataDayInMonth === dayOfMonth) {
          return (
            <TodayIsEkadasi
              key={index}
              buttonStyle={{ backgroundColor: "#15c240" }}
              containerStyle={{ marginBottom: 20 }}
              titleStyle={{ color: "white", fontSize: 30, marginBottom: 10 }}
              title={"Today is Ekadasi"}
              isVisible={!this.state.visible}
              onPress={this.toggleOverlay}
              title="Today is Ekadasi"
              dayOfWeek={data.dayOfWeek}
              monthName={data.monthName}
              dayInMonth={data.dayInMonth}
              ekadasiName={data.ekadasiName}
              breakFastTime={data.breakFastTime}
              style={styles.displayEkadasi}
            />
          );
        }

        if (
          monthIdEqualsMonth &&
          dataDayInMonth === dayOfMonthPlusOne &&
          index === 0
        ) {
          return (
            <TomorowIsEkadasi
              key={index}
              buttonStyle={{ backgroundColor: "#f7ebc4" }}
              onPress={this.toggleOverlay}
              containerStyle={{ marginBottom: 20, marginTop: 20 }}
              titleStyle={{
                color: "#12121c",
                fontSize: 20,
                marginBottom: 5,
              }}
              title="Tomorrow is Ekadasi"
              isVisible={!this.state.visible}
              onPress={this.toggleOverlay}
              dayOfWeek={data.dayOfWeek}
              monthName={data.monthName}
              dayInMonth={data.dayInMonth}
              ekadasiName={data.ekadasiName}
              style={styles.displayEkadasi}
            />
          );
        }

        if (monthIdEqualsMonth && dataDayInMonth > dayOfMonth && index === 0) {
          return (
            <NextEkadasiIs
              key={index}
              style={styles.displayEkadasi}
              dayOfWeek={data.dayOfWeek}
              monthName={data.monthName}
              dayInMonth={data.dayInMonth}
              ekadasiName={data.ekadasiName}
            />
          );
        }

        if (index === 0) {
          return (
            <NextEkadasiIs
              key={index}
              style={styles.displayEkadasi}
              dayOfWeek={data.dayOfWeek}
              monthName={data.monthName}
              dayInMonth={data.dayInMonth}
              ekadasiName={data.ekadasiName}
            />
          );
        }
      });
  }
}

export default DisplayNextEkadasi;

const styles = StyleSheet.create({
  overlayBoxArea: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 19,
  },

  overlayBoxAreaForEkadasiText: {
    marginTop: 50,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 19,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  displayEkadasi: {
    fontSize: 25,
  },

  todayIsEkadasiStyle: {
    fontSize: 25,
    color: "white",
    alignSelf: "center",
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center",
  },
  contentContainer: {
    paddingTop: 30,
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
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)",
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
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
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
