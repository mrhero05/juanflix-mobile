import React from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { w50Percent } from "@styles/global.style";
import { globalStyles, filmGlobalStyles } from "@styles/global.style";
import { websiteStorageUrl, gradientColors } from "@utils/Constants";
import { FilmLoader } from "@components/CustomUI/";
import { router } from "expo-router";
import { formatImageSource } from "@utils/FormatImageSource";
import { SkeletonThumbnailLoader } from "@components/CustomUI/SkeletonLoader";
import { LinearGradient } from "expo-linear-gradient";

const film2Items = w50Percent;
const CategoryRow = ({ title, subtitle, isPending, data, linkTo }) => {
    const FilmFlatList = () => {
        if (isPending) {
            return <FilmLoader width={film2Items} />;
        }
        return (
            <FlatList
                style={filmGlobalStyles.flatList}
                data={data}
                horizontal
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={({ item, index }) => {
                    const imgThumbnail = item?.banner ? item.banner : "";
                    const colorIndex = index % gradientColors.length;
                    return (
                        <TouchableOpacity
                            className="w-full h-full rounded"
                            style={[{ width: film2Items, marginLeft: 20 }]}
                            activeOpacity={0.8}
                            onPress={() => {
                                router.push({
                                    pathname: `Home/Genre/${item.id}`,
                                    params: {
                                        description: item.description,
                                        name: item.name,
                                        banner: item.banner,
                                        colorIndex: colorIndex,
                                    },
                                });
                            }}
                        >
                            <ImageBackground
                                resizeMode="cover"
                                style={[
                                    filmGlobalStyles.filmCategoryItem,
                                    { width: film2Items },
                                ]}
                                imageStyle={{ borderRadius: 4 }}
                                source={formatImageSource(
                                    imgThumbnail,
                                    "thumbnail"
                                )}
                            >
                                <LinearGradient
                                    colors={gradientColors[colorIndex]}
                                    className="h-full"
                                    start={{ x: 0.3, y: 0.3 }}
                                    end={{ x: 0.7, y: 0.7 }}
                                >
                                    <Text
                                        className="mt-auto px-[10] mb-[10]"
                                        style={[
                                            globalStyles.sectionTitleText,
                                            { fontWeight: "500" },
                                        ]}
                                    >
                                        {item.name}
                                    </Text>
                                </LinearGradient>
                            </ImageBackground>
                        </TouchableOpacity>
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

export default CategoryRow;
