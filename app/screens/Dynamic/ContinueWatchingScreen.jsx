import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { globalStyles, width, filmGlobalStyles } from "@styles/global.style";
import { SafeAreaLayout, CustomProgressBar } from "@components/CustomUI";
import { Searchbar, ProgressBar } from "react-native-paper";
import { colors } from "@utils/Constants";
import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { getContinueWatchingFilms } from "@queries/useFilmQuery";
import { router } from "expo-router";
import FormatterUtils from "@utils/FormatterUtils";

const ContinueWatchingScreen = () => {
    const { data: filmRegionData, isPending: filmDataIsPending } =
        getContinueWatchingFilms();

    const screenWidth = width;
    const numColumns = 3;
    const gap = 10;
    const availableSpace = screenWidth - 40 - (numColumns - 1) * gap;
    const itemSize = availableSpace / numColumns;
    return (
        <SafeAreaLayout>
            <View className="pt-[10]" style={[globalStyles.xPadding]}>
                <SearchBarLayout />
            </View>
            <View style={[{ marginTop: 30 }, globalStyles.xPadding]}>
                <FlatList
                    data={filmRegionData}
                    horizontal={false}
                    contentContainerStyle={{ paddingBottom: itemSize }}
                    renderItem={({ item }) => {
                        // let itemPoster = item?.poster ? item.poster : "";
                        let itemPoster = item?.image;
                        const itemDuration = item.duration;
                        const itemCurrent = item.current;
                        const remainingTime = itemDuration - itemCurrent;
                        return (
                            <View className="flex-row gap-5 items-center mb-3">
                                <View
                                    className="h-[100]"
                                    style={{ aspectRatio: 480 / 320 }}
                                >
                                    <TouchableOpacity
                                        className="h-full w-full"
                                        activeOpacity={0.8}
                                        onPress={() => {
                                            // console.log(
                                            //     `Index #${index + 1} Resume watching`
                                            // );
                                            alert("Coming soon!");
                                        }}
                                    >
                                        <ImageBackground
                                            className="h-full w-full rounded justify-center items-center"
                                            resizeMode="cover"
                                            imageStyle={[{ borderRadius: 4 }]}
                                            source={FormatterUtils.formatImageSource(
                                                itemPoster,
                                                "thumbnail"
                                            )}
                                        >
                                            <AntDesign
                                                name="playcircleo"
                                                size={50}
                                                color="white"
                                            />
                                        </ImageBackground>
                                    </TouchableOpacity>
                                    <CustomProgressBar
                                        current={remainingTime}
                                        max={itemDuration}
                                    />
                                </View>
                                <View className="flex-1">
                                    <Text className="text-customWhite font-bold ">
                                        {item.title}
                                    </Text>
                                    <Text className="text-customGray text-sm">
                                        {FormatterUtils.remainingTimeCalculation(
                                            item.duration,
                                            item.current
                                        )}{" "}
                                        Left
                                    </Text>
                                </View>
                                <MaterialCommunityIcons
                                    name="dots-vertical"
                                    size={25}
                                    color="white"
                                    style={{ marginRight: -7 }}
                                    onPress={() => {
                                        alert("Coming soon!");
                                    }}
                                />
                            </View>
                        );
                    }}
                    keyExtractor={(item, index) => index}
                />
            </View>
        </SafeAreaLayout>
    );
};

export default ContinueWatchingScreen;

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
            placeholder="Search your recent history"
            showDivider={false}
            right={(props) => {}}
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
