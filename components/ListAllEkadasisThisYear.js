import * as React from "react";
import { View, StyleSheet, useColorScheme } from "react-native";
import { Card, ListItem } from "react-native-elements";

import * as data from "../data/data-array-2021";

export default function ListAllEkadasisThisYear() {
  let year = new Date().getFullYear();
  let month = new Date().getMonth();
  let dayOfMonth = new Date().getDate();
  const today = year + " " + month + " " + dayOfMonth;

  const colorScheme = useColorScheme();

  const listContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;
  const listTextStyle =
    colorScheme === "light" ? styles.getStartedText : styles.getStartedTextDark;

  return data.thisYear2021.map(data => {
    return (
      <View key={data.ekadasiName + data.monthId}>
        <Card containerStyle={(styles.lightContainer, listContainerStyle)}>
          <View>
            <ListItem
              key={data.ekadasiName}
              containerStyle={(styles.lightContainer, listContainerStyle)}
            >
              <ListItem.Content>
                <ListItem.Title style={(styles.getStartedText, listTextStyle)}>
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
  getStartedText: {
    fontSize: 17,
    alignSelf: "center",
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  getStartedTextDark: {
    fontSize: 17,
    alignSelf: "center",
    color: "#fff",
    lineHeight: 24,
    textAlign: "center",
    fontWeight: "bold",
  },

  lightContainer: {
    backgroundColor: "#d0d0c0",
  },
  darkContainer: {
    backgroundColor: "#242c40",
  },
});
