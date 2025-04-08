import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { colors } from "@utils/Constants";

export const CustomButton = ({ title, ...props }) => {
    return (
        <Button style={[styles.customButtonStyle]} {...props}>
            {title}
        </Button>
    );
};

export const YellowButton = ({ title, ...props }) => {
    return (
        <Button
            style={[styles.yellowButtonStyle]}
            textColor={colors.customBlack}
            buttonColor={colors.customYellow}
            {...props}
        >
            {title}
        </Button>
    );
};

const styles = StyleSheet.create({
    customButtonStyle: {
        borderRadius: 3,
        fontWeight: "900",
        borderColor: colors.customGray,
        borderWidth: 1,
    },
    yellowButtonStyle: {
        borderRadius: 3,
        fontWeight: "900",
    },
});
