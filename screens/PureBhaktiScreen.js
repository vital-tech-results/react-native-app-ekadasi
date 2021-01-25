import React from "react";
import { WebView } from "react-native-webview";

export default function PureBhakti() {
  return (
    <WebView
      originWhitelist={["*"]}
      source={{ uri: "https://www.purebhakti.com/resources/vaisnava-calendar" }}
    />
  );
}
