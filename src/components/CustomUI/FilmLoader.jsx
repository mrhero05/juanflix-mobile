import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { filmGlobalStyles } from "@styles/global.style";

const FilmLoader = ({ width }) => {
    return (
        <View style={[filmGlobalStyles.filmItem, { width: width }]}>
            <ActivityIndicator size="large" color="#FFC300" />
        </View>
    );
};

export default FilmLoader;
