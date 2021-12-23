import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-elements";
import EkadasiOverlay from "./AboutEkadasiTextOverlay";

export default function DayAfterEkadasi({
  index,
  buttonStyle,
  containerStyle,
  titleStyle,
  onPress,
  title,
  dayOfWeek,
  monthName,
  dayInMonth,
  ekadasiName,
  isVisible,
  breakFastTime,
  style,
}) {
  return (
    <>
      <View key={index}>
        <Button
          buttonStyle={buttonStyle}
          onPress={onPress}
          containerStyle={containerStyle}
          titleStyle={titleStyle}
          title={title}
        />

        <EkadasiOverlay isVisible={isVisible} onPress={onPress} />

        <Text style={style}>
          {dayOfWeek}, {monthName} {dayInMonth}: {ekadasiName}
        </Text>
        <Text style={{ marginTop: "5%", fontSize: 15 }}>
          Break fast today between (parana)
        </Text>
        <Text style={{ fontSize: 24 }}>{breakFastTime}</Text>
      </View>
    </>
  );
}
