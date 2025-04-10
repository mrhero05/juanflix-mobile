import { View, Text, StyleSheet } from "react-native";
import React from "react";

const SmallTitleDescription = ({
    title,
    description,
    styles,
    descriptionStyles,
}) => {
    return (
        <View className="w-full" style={styles}>
            <Text
                className=" text-customYellow leading-[1.4]"
                style={[style.titleStyle]}
            >
                {title}
            </Text>
            <Text
                className=" text-customGray pt-1"
                style={[descriptionStyles, style.textStyle]}
            >
                {description}
            </Text>
        </View>
    );
};

const style = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    textStyle: {
        textAlign: "center",
        lineHeight: 24,
    },
});
export default SmallTitleDescription;
