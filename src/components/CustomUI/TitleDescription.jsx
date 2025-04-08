import { View, Text } from "react-native";
import React from "react";

const TitleDescription = ({ title, description, styles }) => {
    return (
        <View className="w-full pt-[50px]" style={styles}>
            <Text className="text-[2.2rem] font-bold text-customYellow leading-[1.4] text-center">
                {title}
            </Text>
            <Text className="text-center text-white pt-1">{description}</Text>
        </View>
    );
};

export default TitleDescription;
