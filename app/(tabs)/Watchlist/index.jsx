import * as React from "react";
import { View, Text } from "react-native";
import { WebView } from "react-native-webview";
import { globalStyles } from "@styles/global.style";
import { SafeAreaLayout } from "@components/CustomUI";

const Watchlist = () => {
    return (
        <SafeAreaLayout>
            <View style={globalStyles.zPadding}>
                <Text className="text-customYellow text-center text-2xl">
                    Coming soon!
                </Text>
            </View>
        </SafeAreaLayout>
    );
};

export default Watchlist;
