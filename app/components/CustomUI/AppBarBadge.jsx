import { StyleSheet, View } from "react-native";
import React from "react";
import { Badge } from "react-native-paper";

const AppBarBadge = ({ appBarBadge, children }) => {
    return (
        <View style={{ position: "relative" }}>
            {appBarBadge?.visible && (
                <Badge
                    size={15}
                    visible={appBarBadge.visible}
                    style={styles.badgeStyle}
                >
                    {appBarBadge.number}
                </Badge>
            )}
            {children}
        </View>
    );
};

export default AppBarBadge;

const styles = StyleSheet.create({
    badgeStyle: {
        position: "absolute",
        top: -5,
        right: -2,
        zIndex: 1,
    },
});
