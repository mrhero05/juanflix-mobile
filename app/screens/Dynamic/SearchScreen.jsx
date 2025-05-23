import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { globalStyles, width, filmGlobalStyles } from "@styles/global.style";
import { SafeAreaLayout } from "@components/CustomUI";
import { Searchbar } from "react-native-paper";
import { colors } from "@utils/Constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FilmRow } from "@components/Films";
import useFilmQuery from "@queries/useFilmQuery";
import { router } from "expo-router";
import FormatterUtils from "@utils/FormatterUtils";

const SearchScreen = () => {
    const { data: filmRegionData, isPending: filmDataIsPending } =
        useFilmQuery();

    const screenWidth = width;
    const numColumns = 3;
    const gap = 10;
    const availableSpace = screenWidth - 40 - (numColumns - 1) * gap;
    const itemSize = availableSpace / numColumns;
    return (
        <SafeAreaLayout>
            <View style={[globalStyles.xPadding]}>
                <SearchBarLayout />
            </View>
            <View style={{ marginTop: 30 }}>
                <FlatList
                    data={filmRegionData}
                    ListHeaderComponent={
                        <View>
                            <FilmRow
                                title="Recent Searches"
                                isPending={filmDataIsPending}
                                films={filmRegionData}
                                showTitle={true}
                            />
                            <View
                                className="pl-[20]"
                                style={filmGlobalStyles.headerTitle}
                            >
                                <Text style={[globalStyles.sectionTitleText]}>
                                    Trending Now
                                </Text>
                            </View>
                        </View>
                    }
                    horizontal={false}
                    numColumns={numColumns}
                    contentContainerStyle={{ gap, paddingBottom: itemSize }}
                    columnWrapperStyle={{ gap, paddingInline: 20 }}
                    renderItem={({ item }) => {
                        let itemPoster = item?.poster ? item.poster : "";
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
                                    className="w-full h-full rounded"
                                    onPress={() => {
                                        router.push(`Home/Filminfo/${item.id}`);
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
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaLayout>
    );
};

export default SearchScreen;

const SearchBarLayout = () => {
    const [searchValue, setSearchValue] = useState("");
    return (
        <Searchbar
            mode="bar"
            value={searchValue}
            onChangeText={setSearchValue}
            style={[styles.searchBar]}
            iconColor={colors.customGray}
            placeholderTextColor={colors.customGray}
            inputStyle={[styles.searchInput]}
            placeholder="Search films, events and more..."
            showDivider={false}
            right={(props) => {
                return (
                    <MaterialCommunityIcons
                        {...props}
                        size={20}
                        name="microphone"
                        color={colors.customGray}
                    />
                );
            }}
        />
    );
};
const styles = StyleSheet.create({
    searchBar: {
        minHeight: 0,
        height: 45,
        borderRadius: 3,
        backgroundColor: colors.customMidBlack,
    },
    searchInput: {
        minHeight: 0,
        color: colors.customWhite,
    },
});
