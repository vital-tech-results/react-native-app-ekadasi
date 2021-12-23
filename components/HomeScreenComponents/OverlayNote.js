import React, { useState } from "react";
import { View, StyleSheet, useColorScheme } from "react-native";
import { Button, Overlay, Text } from "react-native-elements";

export default function OverlayNote() {
  const colorScheme = useColorScheme();

  const buttonTextStyle =
    colorScheme === "light"
      ? styles.codeHighlightText
      : styles.codeHighlightTextDark;

  const overlayBoxStyle =
    colorScheme === "light"
      ? styles.overlayBoxStyle
      : styles.overlayBoxStyleDark;

  const textInOverlay =
    colorScheme === "light" ? styles.overlayBoxArea : styles.overlayBoxAreaDark;

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <Button
        buttonStyle={[styles.codeHighlightContainer]}
        title="Tap for important notice..."
        titleStyle={(styles.codeHighlightText, buttonTextStyle)}
        onPress={toggleOverlay}
      />

      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        supportedOrientations={["portrait", "landscape"]}
        animationType="fade"
        overlayStyle={(styles.overlayBoxStyle, overlayBoxStyle)}
      >
        <Text style={(styles.overlayBoxArea, textInOverlay)}>
          NOTE: All dates are for Vrndavana, India. For your local dates tap
          "PureBhakti" below. Configure your local time on purebhatki.com right
          here in this app. Every time you open this app in the future, you will
          see your time zone in the PureBhakti tab. Haribol!
        </Text>
      </Overlay>
    </View>
  );
}

const styles = StyleSheet.create({
  overlayBoxStyle: { backgroundColor: "#fff" },
  overlayBoxStyleDark: { backgroundColor: "#242c40" },

  overlayBoxArea: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 19,
  },
  overlayBoxAreaDark: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 19,
    color: "#fff",
  },

  overlayBoxAreaForEkadasiText: {
    marginTop: 50,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 19,
  },

  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)",
  },
  codeHighlightTextDark: {
    color: "#fff",
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4,
  },
});
