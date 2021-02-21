import React from "react";
import { WebView } from "react-native-webview";
import Loading from "../components/LoadingWebView";

export default function PureBhakti() {
  return (
    <WebView
      originWhitelist={["*"]}
      source={{ uri: "https://www.purebhakti.com/resources/vaisnava-calendar" }}
      startInLoadingState={true}
      renderLoading={() => <Loading />}
    />
  );
}
