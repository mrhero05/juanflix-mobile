import {
    View,
    Text,
    ImageBackground,
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaLayout, Loader } from "@components/CustomUI";
import { globalStyles, width } from "@styles/global.style";
import useFilmQuery from "@queries/useFilmQuery";
import { LinearGradient } from "expo-linear-gradient";
import { gradientColors } from "@utils/Constants";
import useFilmByGenreQuery from "@queries/useFilmByGenreQuery";
import FormatterUtils from "@utils/FormatterUtils";

const GenreScreen = () => {
    const genreParams = useLocalSearchParams();
    const description = FormatterUtils.stripHtmlTag(genreParams.description);
    const { data: filmGenreData, isFetching: filmGenreDataIsFetching } =
        useFilmByGenreQuery(genreParams.id);

    const HeaderContent = () => {
        return (
            <View className="mb-[10]">
                <ImageBackground
                    className="aspect-[1.1]"
                    source={FormatterUtils.formatImageSource(
                        genreParams.banner,
                        "thumbnail"
                    )}
                >
                    <LinearGradient
                        colors={gradientColors[genreParams.colorIndex]}
                        className="h-full"
                        start={{ x: 0.3, y: 0.3 }}
                        end={{ x: 0.7, y: 0.7 }}
                    >
                        <LinearGradient
                            colors={["transparent", "rgba(0,0,0,1)"]}
                            style={[
                                globalStyles.zPadding,
                                styles.linearBackground,
                            ]}
                        >
                            <View className="mt-auto">
                                <Text
                                    className="text-customYellow"
                                    style={globalStyles.headerText}
                                >
                                    {genreParams.name.toUpperCase()}
                                </Text>
                                <Text
                                    className="text-customWhite font-light"
                                    style={globalStyles.description}
                                >
                                    {description}
                                </Text>
                            </View>
                        </LinearGradient>
                    </LinearGradient>
                </ImageBackground>
            </View>
        );
    };
    const screenWidth = width;
    const numColumns = 3;
    const gap = 10;

    const availableSpace = screenWidth - 40 - (numColumns - 1) * gap;
    const itemSize = availableSpace / numColumns;
    return (
        <SafeAreaLayout>
            <FlatList
                data={filmGenreData}
                ListHeaderComponent={<HeaderContent />}
                horizontal={false}
                numColumns={numColumns}
                contentContainerStyle={{ gap }}
                columnWrapperStyle={{ gap, paddingInline: 20 }}
                renderItem={({ item }) => {
                    let itemPoster = item?.poster ? item.poster : "";
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
                                    router.push(`Home/Filminfo/${item.id}`);
                                }}
                            >
                                <Image
                                    className="w-full h-full rounded"
                                    source={FormatterUtils.formatImageSource(
                                        itemPoster
                                    )}
                                />
                            </TouchableOpacity>
                        </View>
                    );
                }}
                ListEmptyComponent={() => {
                    if (filmGenreDataIsFetching) {
                        return <Loader />;
                    }
                    return (
                        <View style={globalStyles.xPadding}>
                            <Text className="text-customGray mt-[30] ml-[5]">
                                This genre doesn’t have any films yet.
                            </Text>
                        </View>
                    );
                }}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaLayout>
    );
};

export default GenreScreen;

const styles = StyleSheet.create({
    linearBackground: {
        marginTop: "auto",
        height: "60%",
    },
});
