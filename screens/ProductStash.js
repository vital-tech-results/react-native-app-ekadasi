import React from "react";
import { WebView } from "react-native-webview";

export default function ProductStash() {
  return (
    <WebView
      originWhitelist={["*"]}
      source={{ uri: "https://app.productstash.io/ekadasi-app" }}
    />
  );
}
