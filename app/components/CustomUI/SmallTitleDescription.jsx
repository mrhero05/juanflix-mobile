import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { globalStyles } from "@styles/global.style";
import { colors } from "@utils/Constants";

const SmallTitleDescription = ({
    title,
    description,
    styles,
    descriptionStyles,
}) => {
    return (
        <View className="w-full" style={styles}>
            <Text
                className="text-center"
                style={[
                    globalStyles.sectionTitleText,
                    { color: colors.customYellow },
                ]}
            >
                {title}
            </Text>
            <Text
                className=" text-center pt-1"
                style={[descriptionStyles, globalStyles.bodyText]}
            >
                {description}
            </Text>
        </View>
    );
};

const style = StyleSheet.create({});
export default SmallTitleDescription;
