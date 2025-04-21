import * as React from "react";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
    ICarouselInstance,
    Pagination,
} from "react-native-reanimated-carousel";

import {
    Dimensions,
    View,
    Text,
    Button,
    Image,
    ScrollView,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

import { YellowButton, CustomButton } from "@components/CustomUI";
import { colors } from "@utils/Constants";
import { LinearGradient } from "expo-linear-gradient";

const data = [...new Array(6).keys()];
const width = Dimensions.get("window").width;

const Watchlist = () => {
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

    return (
        <View style={{ flex: 1 }}>
            <Carousel
                ref={ref}
                width={width}
                data={data}
                onProgressChange={progress}
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 50,
                }}
                renderItem={({ index }) => (
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
                                        style={[
                                            styles.ratingStyle,
                                            styles.textStyle,
                                        ]}
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
                )}
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
        </View>
    );
};

export default Watchlist;

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
