import React from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import { colors } from "@utils/Constants";
import { Entypo } from "@expo/vector-icons";
import { width } from "@styles/global.style";
import { globalStyles, filmGlobalStyles } from "@styles/global.style";
import { websiteStorageUrl } from "@utils/Constants";
import { router } from "expo-router";

const filmFullWidth = width - 60;
const FeaturedFilm = ({ title, subtitle, films, linkTo }) => {
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
                    <Text style={globalStyles.sectionTitleText}>{title}</Text>
                </View>
            )}
            {subtitle ? (
                <Text className="pl-[20]" style={filmGlobalStyles.subtitle}>
                    {subtitle}
                </Text>
            ) : null}
            <FlatList
                style={filmGlobalStyles.flatList}
                data={films}
                horizontal
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    const itemThumbnail = `${websiteStorageUrl}${item.poster}`;
                    return (
                        <View
                            className="p-0"
                            style={[
                                filmGlobalStyles.filmItem,
                                { width: filmFullWidth },
                            ]}
                        >
                            <TouchableOpacity
                                activeOpacity={0.8}
                                className="w-full h-full rounded"
                                onPress={() => {
                                    router.push({
                                        pathname: "Home/Filminfo/[id]",
                                        params: {
                                            id: item.id,
                                            src: item.src,
                                            title: item.title,
                                            rating: item.rating,
                                            duration: item.duration,
                                            description: item.description,
                                            genres: JSON.stringify(item.genres),
                                            categories: JSON.stringify(
                                                item.categories
                                            ),
                                            trailer_src: item.trailer_src,
                                        },
                                    });
                                }}
                            >
                                <Image
                                    className="w-full h-full rounded"
                                    resizeMode="cover"
                                    source={{ uri: itemThumbnail }}
                                ></Image>
                            </TouchableOpacity>
                        </View>
                    );
                }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default FeaturedFilm;
