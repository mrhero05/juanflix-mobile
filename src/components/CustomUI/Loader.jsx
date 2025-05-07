import { ActivityIndicator, View } from "react-native";
import React from "react";

const Loader = () => {
    return (
        <View
            style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "black",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1,
            }}
        >
            <ActivityIndicator size="large" color="#FFC300" />
        </View>
    );
};

export default Loader;
