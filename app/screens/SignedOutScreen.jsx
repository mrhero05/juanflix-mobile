import React, { useRef } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    StatusBar,
    ImageBackground,
    Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import {
    images,
    colors,
    indexFilmData,
    indexIconTitleData,
    benefitsData,
} from "@utils/Constants";
import "@styles/global.css";
import { Appbar } from "react-native-paper";
import { globalStyles, width, w33Percent } from "@styles/global.style";
import { useNavigation } from "@react-navigation/native";
import {
    TitleDescription,
    PressableLink,
    IconTitle,
    SmallTitleDescription,
    SubscriptionPlan,
    YellowButton,
} from "@components/CustomUI";

const SignedOutScreen = () => {
    const navigation = useNavigation();
    const juanflixLink = process.env.EXPO_PUBLIC_JUANFLIX_CREATE_LINK;
    const film3Items = w33Percent - 18.7;
    return (
        <>
            <StatusBar translucent={true} />
            <SafeAreaView className="flex-1 ">
                <ScrollView
                    className="flex-1 min-h-screen w-full"
                    style={{
                        backgroundColor: colors.customBlack,
                    }}
                >
                    <View
                        className="min-h-screen w-full"
                        style={{
                            backgroundColor: colors.customBlack,
                        }}
                    >
                        <ImageBackground
                            className="flex-1 min-h-screen w-full"
                            resizeMode="cover"
                            source={images.backgroundHomeScreen}
                        >
                            <View
                                style={[globalStyles.zPadding]}
                                className="flex justify-between items-center flex-row w-full"
                            >
                                <Appbar.Action
                                    color={colors.customWhite}
                                    icon="menu"
                                    size={30}
                                    style={{
                                        marginLeft: -10,
                                    }}
                                    isLeading
                                />
                                <Image
                                    source={images.brandLogo}
                                    style={{
                                        width: 130,
                                        height: 60,
                                        resizeMode: "contain",
                                    }}
                                />
                                <Link
                                    className="text-customWhite"
                                    href="screens/SignupScreen"
                                >
                                    SIGN IN
                                </Link>
                                {/* <Link
                                    className="text-customWhite"
                                    href="screens/Home/HomeScreen"
                                >
                                    Homepage
                                </Link> */}
                            </View>
                            <View
                                style={[globalStyles.zPadding]}
                                className=" flex-1 items-center"
                            >
                                <View className="w-full flex-1 my-auto ">
                                    <View className="flex-row justify-center items-center gap-[8px]">
                                        <Image
                                            resizeMode="contain"
                                            style={[
                                                globalStyles.filmAspectRatio,
                                            ]}
                                            source={images.indexImg2}
                                        />
                                        <Image
                                            className="flex-1 w-[45%]"
                                            resizeMode="contain"
                                            style={[
                                                {
                                                    flexGrow: 1.75,
                                                },
                                                globalStyles.filmAspectRatio,
                                            ]}
                                            source={images.indexImg1}
                                        />
                                        <Image
                                            resizeMode="contain"
                                            style={[
                                                globalStyles.filmAspectRatio,
                                            ]}
                                            source={images.indexImg3}
                                        />
                                    </View>
                                    <View className="max-w-[350px]">
                                        <TitleDescription
                                            title="Watch Filipino Classic Films And Masterpieces"
                                            description="All in JuanClick, All in JuanFlix"
                                            styles={{ gap: 5 }}
                                        />
                                    </View>
                                </View>
                                <View className="border-customYellow border w-full rounded-[3px] p-[17px] mt-auto mb-[30px] items-center bg-customLowOpacityGray">
                                    <Text className="text-customGray">
                                        Create a JuanFlix account and more.
                                    </Text>
                                    <View className="flex flex-row justify-center">
                                        <Text className="text-customGray">
                                            Go to{" "}
                                        </Text>
                                        <PressableLink
                                            title="JuanFlix.com/index"
                                            onPress={() =>
                                                navigation.navigate(
                                                    "screens/LeavingTheAppScreen",
                                                    {
                                                        continueLink:
                                                            juanflixLink,
                                                    }
                                                )
                                            }
                                        />
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View
                        className="flex-1 w-full items-center"
                        style={[
                            globalStyles.xPadding,
                            { paddingBlock: 60, gap: 60 },
                        ]}
                    >
                        {indexIconTitleData.map((item) => (
                            <IconTitle
                                key={item.id}
                                source={item.source}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </View>
                    <View
                        className="flex-1 w-full"
                        style={[
                            styles.curveBackgroundSection,
                            globalStyles.xPadding,
                        ]}
                    >
                        <View style={styles.curveBackgroundGray} />
                        <View style={styles.curveBackgroundYellow} />
                        <Text className="text-center font-bold text-2xl">
                            ALL OF THESE AND MORE,{"\n"} NOW STREAMING
                        </Text>
                        <View style={styles.curveFilmSection}>
                            {indexFilmData.map((item) => (
                                <Image
                                    resizeMode="contain"
                                    key={item.id}
                                    source={item.source}
                                    style={[
                                        globalStyles.filmAspectRatio,
                                        { width: film3Items, flex: 0 },
                                    ]}
                                />
                            ))}
                        </View>
                    </View>
                    <View
                        className="flex-1 w-full"
                        style={[
                            globalStyles.xPadding,
                            {
                                marginBottom: 50,
                            },
                        ]}
                    >
                        <SmallTitleDescription
                            title="SUBSCRIPTION PROMO"
                            description="Subscribe to JuanFlix for unlimited access to quality films, and exclusive content."
                            styles={{
                                paddingBlock: 40,
                                maxWidth: 250,
                                marginInline: "auto",
                            }}
                        />
                        <SubscriptionPlan
                            price="49"
                            frequently="per month"
                            plantag="PREMIUM PLAN"
                            benefits={benefitsData.map((item) => (
                                <Text key={item.id} className="text-customGray">
                                    <Text>✓</Text> {item.text}
                                </Text>
                            ))}
                            button={
                                <YellowButton
                                    title="Get Offer Now"
                                    style={{
                                        borderTopLeftRadius: 0,
                                        borderTopRightRadius: 0,
                                    }}
                                />
                            }
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};
export default SignedOutScreen;
const styles = StyleSheet.create({
    curveBackgroundGray: {
        height: 360,
        backgroundColor: colors.customGray,
        borderRadius: "100%",
        transform: [{ scaleX: 2 }],
        position: "absolute",
        top: -37,
        left: 0,
        right: 0,
    },
    curveBackgroundYellow: {
        height: 360,
        backgroundColor: colors.customYellow,
        borderRadius: "100%",
        transform: [{ scaleX: 2 }],
        position: "absolute",
        top: -35,
        left: 0,
        right: 0,
    },
    curveBackgroundSection: {
        marginTop: 35,
        paddingTop: 20,
        backgroundColor: colors.customYellow,
        position: "relative",
    },
    curveFilmSection: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
        paddingTop: 30,
        paddingBottom: 40,
    },
});
