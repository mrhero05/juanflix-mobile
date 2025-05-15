import {
    View,
    Text,
    ImageBackground,
    FlatList,
    Image,
    StyleSheet,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaLayout } from "@components/CustomUI";
import stripHtmlTag from "@utils/StripHtmlTag";
import {
    globalStyles,
    filmGlobalStyles,
    w33Percent,
    width,
} from "@styles/global.style";
import useFilmQuery from "@queries/useFilmQuery";
import { LinearGradient } from "expo-linear-gradient";
import { formatImageSource } from "@utils/FormatImageSource";

const GenreScreen = () => {
    const genreParams = useLocalSearchParams();
    const description = stripHtmlTag(genreParams.description);
    const { data } = useFilmQuery();
    const HeaderContent = () => {
        return (
            <View className="mb-[10]">
                <ImageBackground
                    className="aspect-[1.1]"
                    source={formatImageSource(genreParams.banner, "thumbnail")}
                >
                    <LinearGradient
                        colors={["transparent", "rgba(0,0,0,1)"]}
                        style={[globalStyles.zPadding, styles.linearBackground]}
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
                data={data}
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
                            <Image
                                className="w-full h-full rounded"
                                source={formatImageSource(itemPoster)}
                            />
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
