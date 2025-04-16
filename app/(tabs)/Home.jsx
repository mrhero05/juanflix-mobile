import {
    View,
    Text,
    Button,
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
import FilmRow from "@components/Films/FilmRow";
import FilmService from "@services/FilmService";
import { useNavigation } from "expo-router";

const Home = () => {
    const { userLogout, authState } = useAuth();
    const [filmRegionData, setFilmRegionData] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const getFilmRegionData = async () => {
            try {
                const response = await FilmService.getFilmRegionData();
                if (response) {
                    setFilmRegionData(response.record);
                }
            } catch (error) {
                setError("Something went wrong!");
            }
        };
        getFilmRegionData();
    }, []);

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
                        <Text style={styles.filmTitleStyle}>Ekstra</Text>
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
                <View className="pl-[20] mt-[30]">
                    <FilmRow
                        title="Movies Spotlight"
                        linkTo={() => {
                            // navigation.navigate("Browse");
                            console.log("Navigation to its inner page");
                        }}
                        subtitle="NowPlaying on your channels and apps"
                        films={filmRegionData}
                    />
                    <FilmRow
                        title="Trending Now"
                        subtitle="Watch our trending films"
                        films={filmRegionData}
                        linkTo={() => {
                            // navigation.navigate("Browse");
                            console.log("Navigation to its inner page");
                        }}
                    />
                    <FilmRow
                        title="New Release"
                        subtitle="Explore our new release movies"
                        films={filmRegionData}
                        linkTo={() => {
                            // navigation.navigate("Browse");
                            console.log("Navigation to its inner page");
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
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
