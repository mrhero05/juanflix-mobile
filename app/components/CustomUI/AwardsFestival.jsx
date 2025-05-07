import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors, images } from "@utils/Constants";
import { globalStyles } from "@styles/global.style";

const AwardsFestival = ({ title, subtitle, source }) => {
    console.log();
    return (
        <View className="flex-row items-center gap-5 mb-[-10]">
            <Image
                className="w-[35]"
                resizeMode="contain"
                source={images[source]}
            />
            <View>
                <Text
                    style={[globalStyles.bodyText, styles.awardsFestivalText]}
                >
                    {title}
                </Text>
                <Text style={globalStyles.bodyText}>{subtitle}</Text>
            </View>
        </View>
    );
};

export default AwardsFestival;
const styles = StyleSheet.create({
    awardsFestivalText: {
        fontWeight: "bold",
        fontSize: 16,
        color: colors.customWhite,
        marginBottom: -3,
    },
});
