import { View, Text } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const InAppBrowser = () => {
    return (
        <WebView
            className="flex-1"
            source={{ uri: process.env.EXPO_PUBLIC_REGISTRATION_LINK }}
        />
    );
};

export default InAppBrowser;
