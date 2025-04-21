import React from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import { colors } from "@utils/Constants";
import { Entypo } from "@expo/vector-icons";
import { width, w33Percent } from "@styles/global.style";
import { useFonts } from "expo-font";
import { globalStyles, filmGlobalStyles } from "@styles/global.style";

const film3Items = w33Percent - 10;
const FilmRow = ({ title, subtitle, films, linkTo }) => {
    const [fontsLoaded] = useFonts({
        creatoBoldItalic: require("@fonts/CreatoDisplay-BlackItalic.otf"),
    });
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
                renderItem={({ item }) => (
                    <View
                        className="p-0"
                        style={[
                            filmGlobalStyles.filmItem,
                            { width: film3Items },
                        ]}
                    >
                        <Image
                            className="w-full h-full rounded"
                            resizeMode="cover"
                            source={{ uri: item.image }}
                        ></Image>
                    </View>
                )}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default FilmRow;
