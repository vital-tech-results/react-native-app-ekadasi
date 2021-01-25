import React, { Component } from "react";
import { WebView } from "react-native-webview";

export default function ProductStash() {
  return (
    <WebView
      originWhitelist={["*"]}
      source={{ html: "<h1>This is a static HTML source!</h1>" }}
    />
  );
}
