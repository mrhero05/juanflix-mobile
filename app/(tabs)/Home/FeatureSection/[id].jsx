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
import { SafeAreaLayout, Loader } from "@components/CustomUI";
import stripHtmlTag from "@utils/StripHtmlTag";
import { formatImageSource } from "@utils/FormatImageSource";
import { globalStyles, width } from "@styles/global.style";
import { websiteStorageUrl } from "@utils/Constants";
import useFilmQuery from "@queries/useFilmQuery";
import { LinearGradient } from "expo-linear-gradient";
import useFilmByCategoryQuery from "@queries/useFilmByCategoryQuery";

const FeatureSection = () => {
    const featuredParams = useLocalSearchParams();
    const imgThumbnail = `${websiteStorageUrl}${featuredParams.banner}`;
    const description = stripHtmlTag(featuredParams.description);
    const { data, isFetching: filmFeatureDataIsFetching } =
        useFilmByCategoryQuery(featuredParams.id);
    const HeaderContent = () => {
        return (
            <View className="mb-[10]">
                <ImageBackground
                    className="aspect-[1.1]"
                    source={
                        featuredParams.banner === undefined
                            ? require("@images/defaultImg16x9.png")
                            : featuredParams.banner
                    }
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
                                {featuredParams.name.toUpperCase()}
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
                ListEmptyComponent={() => {
                    if (filmFeatureDataIsFetching) {
                        return <Loader />;
                    }
                    return (
                        <View style={globalStyles.xPadding}>
                            <Text className="text-customGray mt-[30] ml-[5]">
                                This section doesn’t have any films yet.
                            </Text>
                        </View>
                    );
                }}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaLayout>
    );
};

export default FeatureSection;

const styles = StyleSheet.create({
    linearBackground: {
        marginTop: "auto",
        height: "60%",
    },
});
