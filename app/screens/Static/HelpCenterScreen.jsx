import { View, Text } from "react-native";
import React from "react";
import { SafeAreaLayout } from "@components/CustomUI";
import { globalStyles } from "@styles/global.style";

const HelpCenter = () => {
    return (
        <SafeAreaLayout>
            <View style={globalStyles.zPadding}>
                <Text className="text-customYellow text-center text-2xl">
                    Coming soon!
                </Text>
            </View>
        </SafeAreaLayout>
    );
};

export default HelpCenter;
