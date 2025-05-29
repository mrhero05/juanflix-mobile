import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaLayout, Loader } from "@components/CustomUI";
import { globalStyles, width } from "@styles/global.style";
import { getAllFilms } from "@queries/useFilmQuery";
import FormatterUtils from "@utils/FormatterUtils";
import { Dropdown } from "react-native-element-dropdown";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "@utils/Constants";
import { getAllGenres } from "@queries/useFilmGenresQuery";

const Browse = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const { data: filmGenreData, isFetching: filmGenreDataIsFetching } =
        getAllFilms();
    let genreData = [];
    const { data: filmGenre, isFetching: filmGenreIsFetching } = getAllGenres();

    console.log(JSON.stringify(filmGenre, null, "\t"));
    if (!filmGenreIsFetching) {
        const genreDatas = filmGenre.map((item) => {
            return { label: item.name, value: item.id };
        });
        genreData = genreDatas;
    }

    const screenWidth = width;
    const numColumns = 3;
    const gap = 10;

    const availableSpace = screenWidth - 32 - (numColumns - 1) * gap;
    const itemSize = availableSpace / numColumns;
    return (
        <SafeAreaLayout>
            <View className="mb-[30]" style={globalStyles.xPadding}>
                <Dropdown
                    style={[styles.dropdown]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    itemContainerStyle={styles.itemContainerStyle}
                    itemTextStyle={styles.itemTextStyle}
                    containerStyle={styles.containerStyle}
                    backgroundColor={styles.backgroundColor}
                    activeColor={colors.customGray}
                    data={genreData}
                    maxHeight={250}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? "Genres" : "..."}
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(item) => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}
                    renderLeftIcon={() => (
                        <AntDesign
                            style={styles.icon}
                            color={colors.customWhite}
                            name="Safety"
                            size={20}
                        />
                    )}
                />
            </View>
            <FlatList
                data={filmGenreData}
                ListHeaderComponent={
                    <View style={globalStyles.xPadding}>
                        <Text
                            className="mb-[10]"
                            style={[globalStyles.sectionTitleText]}
                        >
                            Top Picks
                        </Text>
                    </View>
                }
                horizontal={false}
                numColumns={numColumns}
                contentContainerStyle={{ gap }}
                columnWrapperStyle={{ gap, paddingInline: 16 }}
                renderItem={({ item }) => {
                    // let itemPoster = item?.poster ? item.poster : "";
                    let itemPoster = "";
                    return (
                        <View
                            className="p-0"
                            style={[
                                {
                                    width: itemSize,
                                    aspectRatio: 320 / 480,
                                },
                            ]}
                        >
                            <TouchableOpacity
                                activeOpacity={0.8}
                                className="w-full h-full"
                                onPress={() => {
                                    router.push(`Browse/Filminfo/${item.id}`);
                                }}
                            >
                                <Image
                                    className="w-full h-full rounded"
                                    source={FormatterUtils.formatImageSource(
                                        itemPoster
                                    )}
                                />
                            </TouchableOpacity>
                        </View>
                    );
                }}
                ListEmptyComponent={() => {
                    if (filmGenreDataIsFetching) {
                        return <Loader />;
                    }
                    return (
                        <View style={globalStyles.xPadding}>
                            <Text className="text-customGray mt-[30] ml-[5]">
                                This genre doesn’t have any films yet.
                            </Text>
                        </View>
                    );
                }}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaLayout>
    );
};

export default Browse;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 16,
    },
    dropdown: {
        height: 50,
        borderRadius: 3,
        paddingHorizontal: 12,
        backgroundColor: colors.customDarkGray,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: "absolute",
        backgroundColor: "white",
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
        color: colors.customWhite,
    },
    selectedTextStyle: {
        fontSize: 16,
        color: colors.customWhite,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    itemContainerStyle: {
        backgroundColor: colors.customDarkGray,
    },
    itemTextStyle: {
        color: colors.customWhite,
    },
    containerStyle: {
        marginTop: 5,
        borderWidth: 0,
        borderRadius: 3,
        overflow: "hidden",
    },
});
