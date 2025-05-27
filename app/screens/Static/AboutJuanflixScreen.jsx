import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    Image,
    ScrollView,
} from "react-native";
import React from "react";
import { globalStyles } from "@styles/global.style";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BrandLogo } from "@components/CustomUI/";
import { Divider } from "react-native-paper";
import { colors } from "@utils/Constants";
import { SafeAreaLayout } from "@components/CustomUI";

const AboutJuanflix = () => {
    const aboutCardData = [
        {
            source: require("@images/AboutMobile.png"),
            description: "Watch on the go via our iOS and Android apps.",
        },
        {
            source: require("@images/AboutDesktop.png"),
            description: "Just log in at juanflix.ph on your preferred browser",
        },
        {
            source: require("@images/AboutTv.png"),
            description:
                "Enjoy big-screen storytelling with compatible Smart TVs and casting devices",
        },
    ];
    const IconDescriptionCard = ({ source, description }) => {
        return (
            <ImageBackground
                className="flex-row gap-5 p-[15] items-center rounded"
                source={require("@images/AboutBg.png")}
                style={[
                    { backgroundColor: colors.customDarkerGray },
                    { minHeight: 90 },
                ]}
            >
                <Image className="w-[40] h-[40]" source={source} />
                <Text className="flex-1" style={globalStyles.description}>
                    {description}
                </Text>
            </ImageBackground>
        );
    };
    return (
        <SafeAreaLayout>
            <ScrollView>
                <View className=" flex-1 items-center p-[20px]">
                    <BrandLogo />
                    <View className="mt-[20]">
                        <Text className="text-customYellow text-3xl font-bold text-center mb-3">
                            WHAT IS JUANFLIX?
                        </Text>
                        <Text
                            className="text-center"
                            style={[
                                globalStyles.description,
                                { lineHeight: 24, fontSize: 16 },
                            ]}
                        >
                            JuanFlix is a streaming platform launched by the
                            Film Development Council of the Philippines (FDCP)
                            that offers a curated selection of Filipino and
                            international films. It aims to provide quality
                            content for film enthusiasts, learners, and
                            filmmakers, making both homegrown and world cinema
                            more accessible.
                        </Text>
                        <Divider className="my-[40]" />
                        <Text className="text-customYellow text-3xl font-bold text-center mb-3">
                            WHERE CAN I WATCH JUANFLIX FILMS?
                        </Text>
                        <Text
                            className="text-center"
                            style={[
                                globalStyles.description,
                                { lineHeight: 24, fontSize: 16 },
                            ]}
                        >
                            Stream your favorite JuanFlix films on the device
                            that works for you:
                        </Text>
                    </View>
                    <View className="gap-3 flex-1 w-full my-[30]">
                        {aboutCardData.map((item, index) => (
                            <IconDescriptionCard
                                key={`aboutcard-${index}`}
                                source={item.source}
                                description={item.description}
                            />
                        ))}
                    </View>
                    <Text
                        className="text-center mb-[30]"
                        style={globalStyles.description}
                    >
                        No matter how you watch, JuanFlix brings Filipino films
                        right to your screen.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaLayout>
    );
};

export default AboutJuanflix;
