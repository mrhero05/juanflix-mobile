import React from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { width, w33Percent } from "@styles/global.style";
import { globalStyles, filmGlobalStyles } from "@styles/global.style";
import { router } from "expo-router";
import { websiteStorageUrl } from "@utils/Constants";

const film3Items = w33Percent - 10;
const FilmRow = ({ title, subtitle, isPending, films, linkTo }) => {
    const FilmFlatList = () => {
        if (isPending) {
            return (
                <View
                    style={[filmGlobalStyles.filmItem, { width: film3Items }]}
                >
                    <ActivityIndicator size="large" color="#FFC300" />
                </View>
            );
        }
        return (
            <FlatList
                style={filmGlobalStyles.flatList}
                data={films}
                horizontal
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    // const itemThumbnail = `${websiteStorageUrl}${item.poster}`;
                    const itemThumbnail = item.poster;
                    return (
                        <View
                            className="p-0"
                            style={[
                                filmGlobalStyles.filmItem,
                                { width: film3Items },
                            ]}
                        >
                            <TouchableOpacity
                                activeOpacity={0.8}
                                className="w-full h-full rounded"
                                onPress={() => {
                                    router.push({
                                        pathname: `Home/Filminfo/${item.id}`,
                                    });
                                }}
                            >
                                <Image
                                    className="w-full h-full rounded"
                                    resizeMode="cover"
                                    source={{ uri: itemThumbnail }}
                                />
                            </TouchableOpacity>
                        </View>
                    );
                }}
                showsHorizontalScrollIndicator={false}
            />
        );
    };
    return (
        <View style={filmGlobalStyles.filmContainer}>
            {linkTo ? (
                <TouchableOpacity
                    activeOpacity={0.8}
                    className="pl-[20]"
                    style={filmGlobalStyles.headerTitle}
                    onPress={linkTo}
                >
                    <Text style={globalStyles.sectionTitleText}>{title}</Text>
                    <Entypo name="chevron-right" size={20} color="white" />
                </TouchableOpacity>
            ) : (
                <View className="pl-[20]" style={filmGlobalStyles.headerTitle}>
                    <Text style={[globalStyles.sectionTitleText]}>{title}</Text>
                </View>
            )}
            {subtitle ? (
                <Text className="pl-[20]" style={filmGlobalStyles.subtitle}>
                    {subtitle}
                </Text>
            ) : null}
            <FilmFlatList />
        </View>
    );
};

export default FilmRow;
