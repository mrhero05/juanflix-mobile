import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { globalStyles } from "@styles/global.style";

const IconTitle = ({ source, title, description }) => {
    return (
        <View
            className=" items-center gap-[5px]"
            style={{
                maxWidth: 230,
            }}
        >
            <Image source={source} style={styles.imageStyle} />
            <Text
                className="text-center"
                style={[globalStyles.sectionTitleText]}
            >
                {title}
            </Text>
            <Text className="text-center" style={globalStyles.bodyText}>
                {description}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 90,
        marginBottom: 10,
        resizeMode: "contain",
        aspectRatio: 1 / 1,
    },
});

export default IconTitle;
