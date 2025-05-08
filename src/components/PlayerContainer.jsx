import React from "react";
import { View, Text } from "react-native";

import { globalStyles } from "@/src/styles/global.style";
import { StyleSheet } from "nativewind";

export default ({ children, text, playerRatio }) => {
    return (
        <View className="w-full">
            <View style={globalStyles.subContainer}>
                <View
                    style={[
                        globalStyles.playerContainer,
                        // { aspectRatio: playerRatio },
                    ]}
                >
                    {children}
                </View>
            </View>
            <Text style={globalStyles.text}>{text}</Text>
        </View>
    );
};
