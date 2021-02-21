import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Card, ListItem } from "react-native-elements";

import * as data from "../data/data-array-2021";

export default function ListAllEkadasisThisYear() {
  let year = new Date().getFullYear();
  let month = new Date().getMonth();
  let dayOfMonth = new Date().getDate();
  const today = year + " " + month + " " + dayOfMonth;

  return data.thisYear2021.map(data => {
    return (
      <View key={data.ekadasiName + data.monthId}>
        <Card>
          <View>
            <ListItem key={data.ekadasiName}>
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
  getStartedText: {
    fontSize: 17,
    alignSelf: "center",
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
});
