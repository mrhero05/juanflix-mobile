import React from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { width, w33Percent } from "@styles/global.style";
import { globalStyles, filmGlobalStyles } from "@styles/global.style";
import { router, useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";

const film3Items = w33Percent - 10;
const FilmRow = ({ title, subtitle, films, linkTo }) => {
    const routers = useRouter();
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
                data={films}
                horizontal
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View
                        className="p-0"
                        style={[
                            filmGlobalStyles.filmItem,
                            { width: film3Items },
                        ]}
                    >
                        <TouchableOpacity
                            activeOpacity={0.8}
                            className="w-full h-full rounded"
                            onPress={() => {
                                router.push({
                                    pathname: "Browse/Filminfo/[id]",
                                    params: { id: index },
                                });
                            }}
                        >
                            <Image
                                className="w-full h-full rounded"
                                resizeMode="cover"
                                source={{ uri: item.image }}
                            />
                        </TouchableOpacity>
                    </View>
                )}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default FilmRow;
