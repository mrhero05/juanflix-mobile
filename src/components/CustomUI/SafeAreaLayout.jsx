import { View, Text } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const SafeAreaLayout = ({ children, ...safeViewClass }) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView className={safeViewClass}>{children}</SafeAreaView>
        </SafeAreaProvider>
    );
};

export default SafeAreaLayout;
