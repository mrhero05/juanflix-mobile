import { View, Text, ImageBackground, Image, Linking } from "react-native";
import React, { useEffect } from "react";
import { images, colors } from "@utils/Constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "@styles/global.style";
import { YellowButton, CustomButton } from "@components/CustomUI";
import { useNavigation, useRoute } from "@react-navigation/native";

const LeavingTheAppScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { continueLink } = route.params;

    return (
        <>
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
                            onPress={() => Linking.openURL(continueLink)}
                        />
                        <CustomButton
                            title="CANCEL"
                            textColor={colors.customBlack}
                            buttonColor={colors.customWhite}
                            onPress={() => navigation.goBack()}
                        />
                    </View>
                </ImageBackground>
            </SafeAreaView>
        </>
    );
};

export default LeavingTheAppScreen;
