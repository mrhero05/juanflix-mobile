import { View, Text, ImageBackground, Image, Linking } from "react-native";
import React, { useEffect } from "react";
import { images, colors } from "@utils/Constants";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "@styles/global.style";
import { YellowButton, CustomButton } from "@components/CustomUI";
import * as WebBrowser from "expo-web-browser";
import { router, useLocalSearchParams } from "expo-router";

const LeavingTheAppScreen = () => {
    const { url } = useLocalSearchParams();
    return (
        <SafeAreaProvider>
            <SafeAreaView
                style={globalStyles.container}
                className="flex-1 min-h-screen-safe"
            >
                <ImageBackground
                    className="min-h-screen-safe flex-1 items-center p-[20px]"
                    resizeMode="cover"
                    source={images.backgroundImg}
                >
                    <Image
                        className="mt-[50px]"
                        source={images.brandLogo}
                        style={{
                            width: 150,
                            height: 50,
                            resizeMode: "contain",
                        }}
                    />
                    <Text className="mt-[50px] text-2xl text-customYellow text-center">
                        YOU ARE ABOUT TO LEAVE THE APP AND GO TO AN EXTERNAL
                        WEBSITE.
                    </Text>
                    <View className="w-full flex mt-auto gap-[10px]">
                        <YellowButton
                            title="CONTINUE"
                            onPress={() => {
                                // navigation.goBack();
                                // await WebBrowser.openBrowserAsync(continueLink);
                                router.dismissTo({
                                    pathname:
                                        "screens/Static/InAppBrowserScreen",
                                    params: { link: url },
                                });
                            }}
                        />
                        <CustomButton
                            title="CANCEL"
                            textColor={colors.customBlack}
                            buttonColor={colors.customWhite}
                            onPress={() => router.back()}
                        />
                    </View>
                </ImageBackground>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default LeavingTheAppScreen;
