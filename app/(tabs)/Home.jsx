import {
    View,
    Text,
    Button,
    ScrollView,
    ImageBackground,
    StyleSheet,
} from "react-native";
import React, { useEffect } from "react";
import LocalStorageService from "@services/LocalStorageService";
import { useAuth, authState } from "@context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { YellowButton, CustomButton } from "@components/CustomUI";
import { colors } from "@utils/Constants";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
    const { userLogout, authState } = useAuth();

    const BannerItem = () => {
        return (
            <ImageBackground
                source={require("@images/BannerImage.png")}
                style={styles.bannerImgStyle}
            >
                <View style={styles.detailsStyles}>
                    <LinearGradient
                        colors={["rgba(0,0,0,0.8)", "transparent"]}
                        style={styles.background}
                    />
                    <Text style={styles.filmTitleStyle}>Ekstra</Text>
                    <View style={styles.genreStyle}>
                        <Text style={styles.textStyle}>Comedy • Drama • </Text>
                        <Text style={[styles.ratingStyle, styles.textStyle]}>
                            R13
                        </Text>
                    </View>
                    <View style={styles.actionbuttonStyle}>
                        <YellowButton icon="play" title="Watch Now" />
                    </View>
                </View>
            </ImageBackground>
        );
    };
    return (
        <SafeAreaView>
            <ScrollView>
                <BannerItem />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
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
        paddingInline: 8,
        paddingBlock: 1,
        borderRadius: 3,
    },
    actionbuttonStyle: {},
});
