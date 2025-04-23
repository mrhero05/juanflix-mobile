import React from "react";
import { View, Text } from "react-native";

import { globalStyles } from "@/src/styles/global.style";

export default ({ children, text }) => {
    return (
        <View className="w-full">
            <View style={globalStyles.subContainer}>
                <View style={globalStyles.playerContainer}>{children}</View>
            </View>
            <Text style={globalStyles.text}>{text}</Text>
        </View>
    );
};
