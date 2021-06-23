import React from "react";
import { View, Text, DynamicColorIOS, Platform } from "react-native";

export default function Loading() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color:
            Platform.OS === "ios"
              ? (customDynamicTextColor = DynamicColorIOS({
                  dark: "mintcream",
                  light: "midnightblue",
                }))
              : "midnightblue",
          fontSize: 24,
          fontWeight: "700",
          width: "100%",
          textAlign: "center",
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        Hare Krsna! Loading...
      </Text>
    </View>
  );
}
