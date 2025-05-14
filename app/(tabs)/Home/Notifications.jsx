import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "@styles/global.style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaLayout } from "@components/CustomUI";

const Notifications = () => {
    return (
        <SafeAreaLayout>
            <ScrollView>
                <View style={globalStyles.zPadding}>
                    <Text className="text-customWhite">Today</Text>
                    <View className="flex-row gap-4 mt-4">
                        <Image
                            className="w-[50] h-[50]"
                            source={require("@images/checkicon.png")}
                        />
                        <View className="flex-1 pr-3">
                            <Text className="text-customWhite font-semibold">
                                You're all set!
                            </Text>
                            <Text className="text-customWhite text-base">
                                Thanks for signin up. We're excited to have you!
                                Dive in and discover what's waiting for you
                                inside.
                            </Text>
                            <Text className="text-customGray text-sm">
                                1 minute
                            </Text>
                        </View>
                        <MaterialCommunityIcons
                            className="self-center"
                            name="dots-vertical"
                            size={25}
                            color="white"
                            style={{ marginRight: -7 }}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaLayout>
    );
};

export default Notifications;
