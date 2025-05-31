import { View, Text } from "react-native";
import React from "react";
import { Loader } from "@components/CustomUI";
import { globalStyles } from "@styles/global.style";

const EmptyList = ({ isLoading, emptyDescription }) => {
    if (isLoading) {
        return <Loader />;
    }
    return (
        <View style={globalStyles.xPadding}>
            <Text className="text-customGray mt-[30] ml-[5]">
                {emptyDescription}
            </Text>
        </View>
    );
};

export default EmptyList;
