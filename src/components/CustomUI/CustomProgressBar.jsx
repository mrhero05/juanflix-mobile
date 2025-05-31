import { View, Text } from "react-native";
import React from "react";
import { colors } from "@utils/Constants";
import { ProgressBar } from "react-native-paper";

const CustomProgressBar = ({ current, max }) => {
    return (
        <ProgressBar
            progress={(100 - (current / max) * 100) / 100}
            color={colors.customYellow}
            style={{
                marginTop: -3,
                borderBottomEndRadius: 3,
                borderBottomLeftRadius: 3,
            }}
        />
    );
};

export default CustomProgressBar;
