import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaLayout } from "@components/CustomUI";
import { WebView } from "react-native-webview";
import { router, useLocalSearchParams } from "expo-router";
import { Loader } from "@components/CustomUI/";
import Constants from "expo-constants";

const InAppBrowserScreen = () => {
    const [userAgent, setUserAgent] = useState("");
    const { link } = useLocalSearchParams();
    let webview = null;

    useEffect(() => {
        const fetchAllInfo = async () => {
            setUserAgent(await Constants.getWebViewUserAgentAsync());
        };
        fetchAllInfo();
    }, []);

    const handleWebViewNavigationStateChange = (newNavState) => {
        const { url } = newNavState;
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
            onNavigationStateChange={handleWebViewNavigationStateChange}
            startInLoadingState={true}
            renderLoading={() => <Loader />}
            userAgent={userAgent + " via Juanflix Mobile App"}
        />
    );
};

export default InAppBrowserScreen;
