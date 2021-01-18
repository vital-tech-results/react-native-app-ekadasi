import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";

export default function NextEkadasiIs({
  index,
  style,
  dayOfWeek,
  monthName,
  dayInMonth,
  ekadasiName,
}) {
  return (
    <>
      <View key={index}>
        <Text style={style}>
          {dayOfWeek}, {monthName} {dayInMonth}: {ekadasiName}
        </Text>
      </View>
    </>
  );
}
