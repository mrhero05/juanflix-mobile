import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import FormatterUtils from "@utils/FormatterUtils";
import { colors } from "@utils/Constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const FilmWithInfo = ({ filmid, title, source }) => {
    return (
        <View className="flex-1 flex-row mb-3 items-center gap-5">
            <TouchableOpacity
                activeOpacity={0.8}
                className="flex-1 flex-row items-center gap-5"
                onPress={() => {
                    router.push(`/Watchlist/Filminfo/${filmid}`);
                }}
            >
                <Image
                    className="rounded"
                    height={100}
                    style={{ aspectRatio: 480 / 320 }}
                    source={FormatterUtils.formatImageSource(
                        source,
                        "thumbnail"
                    )}
                />
                <Text className="text-customWhite flex-1 ">{title}</Text>
            </TouchableOpacity>
            <MaterialCommunityIcons
                className="ml-auto mr-[-10]"
                name="dots-vertical"
                size={25}
                color={colors.customGray}
            />
        </View>
    );
};

export default FilmWithInfo;
