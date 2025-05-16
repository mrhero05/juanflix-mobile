import {
    View,
    ScrollView,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@utils/Constants";
import {
    FilmRow,
    TopFilmRow,
    FeaturedFilm,
    CategoryRow,
    ContinueWatchingRow,
} from "@components/Films";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
    ICarouselInstance,
    Pagination,
} from "react-native-reanimated-carousel";
import MainBanner from "@components/Banner/MainBanner";
import useFilmGenresQuery from "@queries/useFilmGenresQuery";
import useFilmContinueWatchQuery from "@queries/useFilmContinueWatchQuery";
import useFilmQuery from "@queries/useFilmQuery";
import { router } from "expo-router";

const data = [...new Array(1).keys()];
const width = Dimensions.get("window").width;

const Home = () => {
    const { data: filmRegionData, isPending: filmDataIsPending } =
        useFilmQuery();
    const { data: filmContinue, isPending: filmContinueIsPending } =
        useFilmContinueWatchQuery();
    const { data: filmCategory, isPending: filmCategoryIsPending } =
        useFilmGenresQuery();

    const ref = React.useRef(null);
    const progress = useSharedValue(0);

    const onPressPagination = (index) => {
        ref.current?.scrollTo({
            /**
             * Calculate the difference between the current index and the target index
             * to ensure that the carousel scrolls to the nearest index
             */
            count: index - progress.value,
            animated: true,
        });
    };

    const BannerItem = () => {
        return (
            <>
                <Carousel
                    ref={ref}
                    width={width}
                    height={450}
                    data={data}
                    onProgressChange={progress}
                    renderItem={({ index }) => {
                        return <MainBanner />;
                    }}
                />

                <Pagination.Basic
                    progress={progress}
                    data={data}
                    dotStyle={{
                        backgroundColor: "rgba(0,0,0,0.2)",
                        borderRadius: 50,
                    }}
                    containerStyle={{ gap: 5, marginTop: 10 }}
                    onPress={onPressPagination}
                />
            </>
        );
    };
    return (
        <SafeAreaView>
            <ScrollView overScrollMode="never">
                <BannerItem />
                <View className=" mt-[30]">
                    <FilmRow
                        title="Movies Spotlight"
                        linkTo={() => {
                            router.push({
                                pathname: `Home/FeatureSection/${1}`,
                                params: {
                                    name: "Movies Spotlight",
                                    description:
                                        "Our Thoughtfully curated films that have just arrived on the platform",
                                    banner: require("@images/MoviesSpotlight.png"),
                                },
                            });
                        }}
                        isPending={filmDataIsPending}
                        subtitle="NowPlaying on your channels and apps"
                        films={filmRegionData}
                    />
                    <FilmRow
                        title="Trending Now"
                        subtitle="Watch our trending films"
                        films={filmRegionData}
                        linkTo={() => {
                            router.push({
                                pathname: `Home/FeatureSection/${1}`,
                                params: {
                                    name: "Trending Now",
                                    description:
                                        "Catch the hottest films everyone’s talking about. From box office hits to indie favorites—start watching what’s trending today!",
                                    banner: require("@images/Trending.png"),
                                },
                            });
                        }}
                        isPending={filmDataIsPending}
                    />
                    <FilmRow
                        title="New Release"
                        subtitle="Explore our new release movies"
                        films={filmRegionData}
                        linkTo={() => {
                            router.push({
                                pathname: `Home/FeatureSection/${1}`,
                                params: {
                                    name: "New Release",
                                    description:
                                        "Fresh from the cutting room—explore the latest films added to our collection. Don’t miss out on what’s new and noteworthy!",
                                    banner: require("@images/NewRelease.png"),
                                },
                            });
                        }}
                        isPending={filmDataIsPending}
                    />
                    <ContinueWatchingRow
                        data={filmContinue}
                        isPending={filmContinueIsPending}
                    />
                    <TopFilmRow
                        title="Juan's Top Pick"
                        films={filmRegionData}
                        isPending={filmDataIsPending}
                    />
                    <FeaturedFilm
                        title="Featured Films"
                        subtitle="Explore our top featured films"
                        films={filmRegionData}
                        linkTo={() => {
                            router.push({
                                pathname: `Home/FeatureSection/${2}`,
                                params: {
                                    name: "Featured Films",
                                    description:
                                        "The Spotlight Belongs Here — shining a light on the films, creators, and voices that define the future of cinema.",
                                },
                            });
                        }}
                        isPending={filmDataIsPending}
                    />
                    <CategoryRow
                        title="Browse by Genre"
                        subtitle="Explore our films by genre"
                        data={filmCategory}
                        linkTo={() => {
                            console.log("Navigate to Genre page");
                        }}
                        isPending={filmCategoryIsPending}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    imageTitle: {
        maxHeight: 60,
        marginInline: "auto",
    },
    watchListButton: {
        minWidth: 0,
        width: 40,
        borderRadius: 3,
    },
    scrollViewBackground: {
        backgroundColor: colors.customBlack,
    },
    linearBackground: {
        marginTop: "auto",
        height: "60%",
    },
    bannerImgStyle: {
        height: 450,
        minHeight: 450,
        width: "100%",
    },
    filmTitleStyle: {
        fontSize: 45,
        textAlign: "center",
        color: colors.customWhite,
    },
    detailsStyles: {
        maxWidth: 280,
        width: "80%",
        marginInline: "auto",
        marginTop: "auto",
        marginBottom: 35,
    },
    textStyle: {
        color: colors.customWhite,
        fontWeight: 400,
    },
    genreStyle: {
        display: "flex",
        flexDirection: "row",
        padding: 15,
        justifyContent: "center",
    },
    ratingStyle: {
        backgroundColor: colors.customDarkGray,
        paddingInline: 10,
        paddingBlock: 1,
        borderRadius: 3,
    },
    actionbuttonStyle: { display: "flex", flexDirection: "row", gap: 8 },
});
