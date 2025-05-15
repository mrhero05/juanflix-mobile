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
import { router } from "expo-router";
import { FilmLoader } from "@components/CustomUI/";
import { formatImageSource } from "@utils/FormatImageSource";

const filmFullWidth = width - 60;
const FeaturedFilm = ({ title, subtitle, isPending, films, linkTo }) => {
    const FilmFlatList = () => {
        if (isPending) {
            return <FilmLoader width={filmFullWidth} />;
        }
        return (
            <FlatList
                style={filmGlobalStyles.flatList}
                data={films}
                horizontal
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    const itemThumbnail = item.poster;
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
                                        pathname: `Home/Filminfo/${item.id}`,
                                    });
                                }}
                            >
                                <Image
                                    className="w-full h-full rounded"
                                    resizeMode="cover"
                                    source={formatImageSource(itemThumbnail)}
                                ></Image>
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
                    <Text style={globalStyles.sectionTitleText}>{title}</Text>
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

export default FeaturedFilm;
