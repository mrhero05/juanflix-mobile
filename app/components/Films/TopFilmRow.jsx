import React from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import { colors, topFilmImage } from "@utils/Constants";
import { Entypo } from "@expo/vector-icons";
import { width, w33Percent } from "@styles/global.style";
import { globalStyles, filmGlobalStyles } from "@styles/global.style";

const film3Items = w33Percent;
const TopFilmRow = ({ title, subtitle, films, linkTo }) => {
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
                    <Text style={globalStyles.sectionTitleText}>{title}</Text>
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
                renderItem={({ item, index }) => {
                    // console.log(topFilmImage[`number${index + 1}`]);
                    return (
                        <View
                            className="p-0"
                            style={[filmGlobalStyles.filmItem, styles.filmItem]}
                        >
                            <Image
                                style={styles.topTitle}
                                source={topFilmImage[`number${index + 1}`]}
                            />
                            <Image
                                className="w-full h-full rounded"
                                resizeMode="cover"
                                source={{ uri: item.image }}
                            ></Image>
                        </View>
                    );
                }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    topTitle: {
        position: "absolute",
        bottom: 3,
        left: -15,
        zIndex: 1,
        transform: [{ scale: 1.2 }],
    },
    filmItem: {
        width: film3Items,
        marginLeft: 35,
        position: "relative",
    },
});

export default TopFilmRow;
