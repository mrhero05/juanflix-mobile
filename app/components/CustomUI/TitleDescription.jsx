import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "@styles/global.style";
globalStyles;

const TitleDescription = ({ title, description, styles }) => {
    return (
        <View className="w-full pt-[50px]" style={styles}>
            <Text
                className=" text-customYellow text-center"
                style={globalStyles.headerText}
            >
                {title}
            </Text>
            <Text className="text-center text-white pt-1">{description}</Text>
        </View>
    );
};

export default TitleDescription;
