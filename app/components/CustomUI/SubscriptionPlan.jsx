import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "@utils/Constants";

const SubscriptionPlan = ({
    price,
    frequently,
    plantag,
    benefits,
    button,
    styles,
}) => {
    return (
        <>
            <View className="w-full" style={[styles, style.containerStyle]}>
                <View style={style.headerStyle}>
                    <Text className="text-4xl " style={style.textTitle}>
                        ₱{price}
                        <Text
                            style={[
                                style.textStyle,
                                {
                                    fontSize: 14,
                                },
                            ]}
                        >
                            /{frequently}
                        </Text>
                    </Text>
                    <Text style={style.planTagStyle}>{plantag}</Text>
                </View>
                <View>
                    <Text
                        style={[
                            style.textStyle,
                            {
                                fontWeight: "600",
                            },
                        ]}
                    >
                        Benefits:
                    </Text>
                    {benefits}
                </View>
            </View>
            {button}
        </>
    );
};

const style = StyleSheet.create({
    headerStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 30,
        marginTop: 10,
    },
    containerStyle: {
        borderColor: colors.customWhite,
        borderWidth: 2,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        borderBottomWidth: 0,
        padding: 20,
    },
    textTitle: {
        color: colors.customWhite,
        fontWeight: "bold",
    },
    textStyle: {
        color: colors.customGray,
        fontWeight: "normal",
    },
    planTagStyle: {
        color: colors.customBlack,
        backgroundColor: colors.customYellow,
        padding: 7,
        paddingInline: 20,
        borderRadius: 30,
        fontWeight: "600",
    },
});
export default SubscriptionPlan;
