import React, { memo } from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "@utils/Constants";

const Rail = () => {
    return <View style={styles.root} />;
};

export default memo(Rail);

const styles = StyleSheet.create({
    root: {
        flex: 1,
        height: 3,
        borderRadius: 2,
        backgroundColor: colors.customMildGray,
    },
});
