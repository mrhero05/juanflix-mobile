import React from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import { colors, topFilmImage } from "@utils/Constants";
import { Entypo } from "@expo/vector-icons";
import { width, w33Percent } from "@styles/global.style";
import { globalStyles, filmGlobalStyles } from "@styles/global.style";
import { websiteStorageUrl } from "@utils/Constants";
import { router } from "expo-router";

const film3Items = w33Percent;
const TopFilmRow = ({ title, subtitle, films, linkTo }) => {
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
                renderItem={({ item, index }) => {
                    const itemThumbnail = `${websiteStorageUrl}${item.poster}`;
                    return (
                        <View
                            className="p-0"
                            style={[filmGlobalStyles.filmItem, styles.filmItem]}
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
                                    style={styles.topTitle}
                                    source={topFilmImage[`number${index + 1}`]}
                                />
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
        </View>
    );
};
const styles = StyleSheet.create({
    topTitle: {
        position: "absolute",
        bottom: 3,
        left: -15,
        zIndex: 1,
        transform: [{ scale: 1.2 }],
    },
    filmItem: {
        width: film3Items,
        marginLeft: 35,
        position: "relative",
    },
});

export default TopFilmRow;
