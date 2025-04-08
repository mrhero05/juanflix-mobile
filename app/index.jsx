import React, { useRef } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    StatusBar,
    ImageBackground,
    Image,
    TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { images, colors } from "@utils/Constants";
import "@tailWindGlobalCss/global.css";
import { Appbar } from "react-native-paper";
import { globalStyles } from "@/src/styles/global.style";
import { useNavigation } from "@react-navigation/native";
import TitleDescription from "@components/CustomUI/TitleDescription";
import IconTitle from "@components/CustomUI/IconTitle";

export default () => {
    const navigation = useNavigation();
    const juanflixLink = process.env.EXPO_PUBLIC_JUANFLIX_CREATE_LINK;
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
                                style={globalStyles.xPadding}
                                className="flex py-[20px] justify-between items-center flex-row w-full"
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
                                    href="screens/Signup"
                                >
                                    SIGN IN
                                </Link>
                            </View>
                            <View
                                style={[
                                    globalStyles.xPadding,
                                    globalStyles.yPadding,
                                ]}
                                className=" flex-1 items-center"
                            >
                                <View className="w-full flex-1 my-auto ">
                                    <View className="flex-row justify-center items-center gap-[8px]">
                                        <Image
                                            resizeMode="contain"
                                            style={{
                                                flex: 1,
                                                aspectRatio: 340 / 458,
                                            }}
                                            source={images.indexImg2}
                                        />
                                        <Image
                                            className="flex-1 w-[45%]"
                                            resizeMode="contain"
                                            style={{
                                                flexGrow: 1.75,
                                                aspectRatio: 340 / 458,
                                            }}
                                            source={images.indexImg1}
                                        />
                                        <Image
                                            resizeMode="contain"
                                            style={{
                                                flex: 1,
                                                aspectRatio: 340 / 458,
                                            }}
                                            source={images.indexImg2}
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
                                        <TouchableOpacity
                                            onPress={() =>
                                                navigation.navigate(
                                                    "screens/LeavingTheApp",
                                                    {
                                                        continueLink:
                                                            juanflixLink,
                                                    }
                                                )
                                            }
                                        >
                                            <Text className="text-customYellow underline">
                                                JuanFlix.com/index
                                            </Text>
                                        </TouchableOpacity>
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
                        <IconTitle
                            source={images.icon1}
                            title="Endless Entertainment"
                            description="Watch Original filipino shows and movies that speak to you."
                        />
                        <IconTitle
                            source={images.icon2}
                            title="Lots Of Entertainment"
                            description="From killing hits to epic thrills, explore thousands of hours full of love, laughter and adventure"
                        />
                        <IconTitle
                            source={images.icon3}
                            title="Uncover Your New Favorite"
                            description="Dive into an ever-growing collection where every story matters."
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};
