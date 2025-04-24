import * as React from "react";
import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";
import { YellowButton, CustomButton } from "@components/CustomUI";
import { colors } from "@utils/Constants";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";

const MainBanner = () => {
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
                        <Text style={[styles.textStyle]}>Comedy</Text>
                        <Entypo name="dot-single" size={30} color="#C1C1C1" />
                        <Text style={[styles.textStyle]}>Drama</Text>
                        <Entypo name="dot-single" size={30} color="#C1C1C1" />
                        <Text style={[styles.ratingStyle, styles.textStyle]}>
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

export default MainBanner;

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
        alignItems: "center",
    },
    ratingStyle: {
        backgroundColor: "#2e2e2e",
        paddingInline: 10,
        paddingBlock: 1,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: colors.customGray,
    },
    actionbuttonStyle: { display: "flex", flexDirection: "row", gap: 8 },
});
