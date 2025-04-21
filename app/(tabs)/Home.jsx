import {
    View,
    Text,
    Button,
    Image,
    ScrollView,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import LocalStorageService from "@services/LocalStorageService";
import { useAuth, authState } from "@context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { YellowButton, CustomButton } from "@components/CustomUI";
import { colors } from "@utils/Constants";
import { LinearGradient } from "expo-linear-gradient";
import FilmService from "@services/FilmService";
import { useNavigation } from "expo-router";
import {
    FilmRow,
    TopFilmRow,
    FeaturedFilm,
    CategoryRow,
    ContinueWatchingRow,
} from "@components/Films";
import { useQueries, useQuery } from "@tanstack/react-query";

const Home = () => {
    const { userLogout, authState } = useAuth();
    const navigation = useNavigation();

    const [
        { data: filmRegionData, isPending: filmDataIsPending },
        { data: filmCategory, isPending: filmCategoryIsPending },
        { data: filmContinue, isPending: filmContinueIsPending },
    ] = useQueries({
        queries: [
            {
                queryKey: ["filmData"],
                queryFn: async () => {
                    return await FilmService.getFilmRegionData();
                },
            },
            {
                queryKey: ["filmCategoryData"],
                queryFn: async () => {
                    return await FilmService.getCategoryData();
                },
            },
            {
                queryKey: ["filmContinueData"],
                queryFn: async () => {
                    return await FilmService.getContinueWatchingData();
                },
            },
        ],
    });

    const BannerItem = () => {
        return (
            <ImageBackground
                source={require("@images/BannerImage.png")}
                style={styles.bannerImgStyle}
            >
                <LinearGradient
                    colors={["transparent", "rgba(0,0,0,1)"]}
                    style={styles.linearBackground}
                >
                    <View style={styles.detailsStyles}>
                        <Image
                            style={styles.imageTitle}
                            resizeMode="contain"
                            source={require("@images/Ekstra.png")}
                        />
                        {/* <Text style={styles.filmTitleStyle}>Ekstra</Text> */}
                        <View style={styles.genreStyle}>
                            <Text style={styles.textStyle}>
                                Comedy • Drama •{" "}
                            </Text>
                            <Text
                                style={[styles.ratingStyle, styles.textStyle]}
                            >
                                R13
                            </Text>
                        </View>
                        <View style={styles.actionbuttonStyle}>
                            <YellowButton
                                className="flex-1"
                                icon="play"
                                title="Watch Now"
                            />
                            <CustomButton
                                title="+"
                                labelStyle={{ fontSize: 20 }}
                                buttonColor={colors.customDarkGray}
                                textColor={colors.customWhite}
                                style={styles.watchListButton}
                            />
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
        );
    };
    return (
        <SafeAreaView>
            <ScrollView>
                <BannerItem />
                <View className=" mt-[30]">
                    <FilmRow
                        title="Movies Spotlight"
                        linkTo={() => {
                            console.log("Navigate to its inner page");
                        }}
                        subtitle="NowPlaying on your channels and apps"
                        films={filmRegionData}
                    />
                    <FilmRow
                        title="Trending Now"
                        subtitle="Watch our trending films"
                        films={filmRegionData}
                        linkTo={() => {
                            console.log("Navigate to its inner page");
                        }}
                    />
                    <FilmRow
                        title="New Release"
                        subtitle="Explore our new release movies"
                        films={filmRegionData}
                        linkTo={() => {
                            console.log("Navigate to its inner page");
                        }}
                    />
                    <ContinueWatchingRow data={filmContinue} />
                    <TopFilmRow
                        title="Juan's Top Pick"
                        films={filmRegionData}
                    />
                    <FeaturedFilm
                        title="Featured Films"
                        subtitle="Explore our top featured films"
                        films={filmRegionData}
                        linkTo={() => {
                            console.log("Navigate to its inner page");
                        }}
                    />
                    <CategoryRow
                        title="Browse by Genre"
                        subtitle="Explore our films by genre"
                        data={filmCategory}
                        linkTo={() => {
                            console.log("Navigate to Genre page");
                        }}
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
