import React from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import {
    globalStyles,
    filmGlobalStyles,
    w33Percent,
} from "@styles/global.style";
import { router } from "expo-router";
import { formatImageSource } from "@utils/FormatImageSource";
import { SkeletonPosterLoader } from "@components/CustomUI/SkeletonLoader";
import { colors } from "@utils/Constants";
import { FilmLoader } from "@components/CustomUI/";

const film3Items = w33Percent - 10;
const FilmRow = ({ title, subtitle, isPending, films, linkTo, showTitle }) => {
    const FilmFlatList = () => {
        if (isPending) {
            return <FilmLoader width={film3Items} />;
        }
        return (
            <FlatList
                style={filmGlobalStyles.flatList}
                data={films}
                horizontal
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    const itemThumbnail = item.poster;
                    return (
                        <View
                            className="p-0"
                            style={[
                                filmGlobalStyles.filmItem,
                                { width: film3Items },
                                showTitle && styles.showTitlePadding,
                            ]}
                        >
                            <TouchableOpacity
                                activeOpacity={0.8}
                                className="w-full h-full rounded"
                                onPress={() => {
                                    router.push(`Home/Filminfo/${item.id}`);
                                }}
                            >
                                <Image
                                    className="w-full h-full rounded"
                                    resizeMode="cover"
                                    source={formatImageSource(itemThumbnail)}
                                />
                                {showTitle && (
                                    <Text
                                        className="text-customWhite pt-[5]"
                                        ellipsizeMode="tail"
                                        numberOfLines={1}
                                    >
                                        {item.title}
                                    </Text>
                                )}
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
            {subtitle && (
                <Text className="pl-[20]" style={filmGlobalStyles.subtitle}>
                    {subtitle}
                </Text>
            )}
            <FilmFlatList />
        </View>
    );
};

export default FilmRow;

const styles = StyleSheet.create({
    showTitlePadding: {
        paddingBottom: 30,
        aspectRatio: 320 / 530,
    },
});
