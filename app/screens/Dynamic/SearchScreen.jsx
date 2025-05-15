import { View, Text } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "@styles/global.style";
import { SafeAreaLayout } from "@components/CustomUI";

const SearchScreen = () => {
    return (
        <SafeAreaLayout>
            <View style={[globalStyles.zPadding]}>
                <Text className="text-customYellow text-center text-2xl">
                    Search Screen
                </Text>
            </View>
        </SafeAreaLayout>
    );
};

export default SearchScreen;
