import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { router } from "expo-router";
import FormatterUtils from "@utils/FormatterUtils";
import { globalStyles, width } from "@styles/global.style";

const FilmItem33Width = ({ routerPath, source }) => {
    const numColumns = 3;
    const gap = 10;
    const screenWidth = width;
    const inlinePadding = Object.values(globalStyles.xPadding) * 2;

    const availableSpace = screenWidth - inlinePadding - (numColumns - 1) * gap;
    const itemSize = availableSpace / numColumns;
    return (
        <View
            className="p-0"
            style={[
                {
                    width: itemSize,
                    aspectRatio: 320 / 480,
                },
            ]}
        >
            <TouchableOpacity
                activeOpacity={0.8}
                className="w-full h-full"
                onPress={() => {
                    // router.push(`Browse/Filminfo/${item.id}`);
                    router.push(routerPath);
                }}
            >
                <Image
                    className="w-full h-full rounded"
                    source={FormatterUtils.formatImageSource(source)}
                />
            </TouchableOpacity>
        </View>
    );
};

export default FilmItem33Width;
