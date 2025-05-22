import { View, Text } from "react-native";
import React from "react";
import { SafeAreaLayout } from "@components/CustomUI";
import { WebView } from "react-native-webview";
import { router, useLocalSearchParams } from "expo-router";

const InAppBrowserScreen = () => {
    const { link } = useLocalSearchParams();
    let webview = null;

    const runFirst = `
    // Create element:
    const para = document.createElement("p");
    para.innerText = "This is a paragraph.";

    // Append to body:
    document.body.appendChild(para);
      true; // note: this is required, or you'll sometimes get silent failures
    `;
    const handleWebViewNavigationStateChange = (newNavState) => {
        const { url } = newNavState;

        // webview.injectJavaScript(injectJavaScript);
        if (!url) return;
        if (url.includes("gobacktoapp")) {
            if (router.canGoBack()) {
                router.back();
            }
        }
    };
    return (
        <WebView
            ref={(ref) => (webview = ref)}
            source={{
                uri: link,
            }}
            style={{ flex: 1 }}
            injectedJavaScript={runFirst}
            onNavigationStateChange={handleWebViewNavigationStateChange}
        />
    );
};

export default InAppBrowserScreen;
