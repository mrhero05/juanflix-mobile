import React from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { w50Percent } from "@styles/global.style";
import { globalStyles, filmGlobalStyles } from "@styles/global.style";

const film2Items = w50Percent;
const CategoryRow = ({ title, subtitle, data, linkTo }) => {
    return (
        <View style={filmGlobalStyles.filmContainer}>
            {linkTo ? (
                <TouchableOpacity
                    activeOpacity={0.8}
                    className="pl-[20]"
                    style={filmGlobalStyles.headerTitle}
                    onPress={linkTo}
                >
                    <Text style={globalStyles.sectionTitleText}>{title}</Text>
                    <Entypo name="chevron-right" size={20} color="white" />
                </TouchableOpacity>
            ) : (
                <View className="pl-[20]" style={filmGlobalStyles.headerTitle}>
                    <Text style={[globalStyles.sectionTitleText]}>{title}</Text>
                </View>
            )}
            {subtitle ? (
                <Text className="pl-[20]" style={filmGlobalStyles.subtitle}>
                    {subtitle}
                </Text>
            ) : null}
            <FlatList
                style={filmGlobalStyles.flatList}
                data={data}
                horizontal
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <ImageBackground
                        className="w-full h-full rounded"
                        resizeMode="cover"
                        style={[
                            filmGlobalStyles.filmCategoryItem,
                            { width: film2Items },
                        ]}
                        imageStyle={{ borderRadius: 4 }}
                        source={{ uri: item.image }}
                    >
                        <Text
                            className="mt-auto px-[10] mb-[10]"
                            style={[
                                globalStyles.sectionTitleText,
                                { fontWeight: "500" },
                            ]}
                        >
                            {item.title}
                        </Text>
                    </ImageBackground>
                )}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default CategoryRow;
