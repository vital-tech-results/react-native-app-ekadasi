import React from "react";
import { WebView } from "react-native-webview";
import Loading from "../components/LoadingWebView";

export default function ProductStash() {
  return (
    <WebView
      originWhitelist={["*"]}
      source={{ uri: "https://app.productstash.io/ekadasi-app" }}
      startInLoadingState={true}
      renderLoading={() => <Loading />}
    />
  );
}
