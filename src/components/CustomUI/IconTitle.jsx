import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const IconTitle = ({ source, title, description }) => {
    return (
        <View
            className=" items-center gap-[5px]"
            style={{
                maxWidth: 230,
            }}
        >
            <Image
                className="aspect-[1/1]"
                resizeMode="contain"
                source={source}
                style={styles.imageStyle}
            />
            <Text
                className="text-customWhite"
                style={[styles.textStyle, styles.textTitle]}
            >
                {title}
            </Text>
            <Text className="text-customGray" style={styles.textStyle}>
                {description}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 90,
        marginBottom: 10,
    },
    textTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    textStyle: {
        textAlign: "center",
        lineHeight: 24,
    },
});

export default IconTitle;
