import React, { memo } from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "@utils/Constants";

const THUMB_RADIUS_LOW = 12;
const THUMB_RADIUS_HIGH = 16;

const Thumb = ({ name }) => {
    return <View style={name === "high" ? styles.rootHigh : styles.rootLow} />;
};

const styles = StyleSheet.create({
    rootLow: {
        width: THUMB_RADIUS_LOW * 1,
        height: THUMB_RADIUS_LOW * 1,
        borderRadius: THUMB_RADIUS_LOW,
        backgroundColor: colors.customWhite,
    },
    rootHigh: {
        width: THUMB_RADIUS_HIGH * 2,
        height: THUMB_RADIUS_HIGH * 2,
        borderRadius: THUMB_RADIUS_HIGH,
        backgroundColor: colors.customWhite,
    },
});

export default memo(Thumb);
