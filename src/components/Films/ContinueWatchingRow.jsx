import React from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { w50Percent } from "@styles/global.style";
import { globalStyles, filmGlobalStyles } from "@styles/global.style";
import { ProgressBar } from "react-native-paper";
import { colors } from "@utils/Constants";
import { FilmLoader } from "@components/CustomUI/";
import { SkeletonThumbnailLoader } from "@components/CustomUI/SkeletonLoader";

const film2Items = w50Percent;

const remainingTimeCalculation = (duration, current) => {
    let remainingTime = duration - current;
    let remainingTimeText = "";
    if (remainingTime >= 60) {
        remainingTimeText = `${Math.floor(remainingTime / 60)}h`;
        remainingTime % 60 > 0 ? (remainingTimeText += " ") : null;
    }
    if (remainingTime % 60 > 0) {
        remainingTimeText += `${remainingTime % 60}m`;
    }
    return remainingTimeText;
};
const ContinueWatchingRow = ({ data, isPending }) => {
    const FilmFlatList = () => {
        if (isPending) {
            return <FilmLoader width={film2Items} />;
        }
        return (
            <FlatList
                style={filmGlobalStyles.flatList}
                data={data}
                horizontal
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    const itemDuration = item.duration;
                    const itemCurrent = item.current;
                    const remainingTime = itemDuration - itemCurrent;
                    return (
                        <View style={[{ width: film2Items, marginLeft: 20 }]}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    console.log(
                                        `Index #${index + 1} Resume watching`
                                    );
                                }}
                            >
                                <ImageBackground
                                    className="w-full rounded justify-center items-center"
                                    resizeMode="cover"
                                    imageStyle={[{ borderRadius: 4 }]}
                                    style={
                                        filmGlobalStyles.filmContinueWatching
                                    }
                                    source={{ uri: item.image }}
                                >
                                    <AntDesign
                                        name="playcircleo"
                                        size={50}
                                        color="white"
                                    />
                                </ImageBackground>
                            </TouchableOpacity>
                            <ProgressBar
                                progress={
                                    (100 -
                                        (remainingTime / itemDuration) * 100) /
                                    100
                                }
                                color={colors.customYellow}
                                style={{
                                    marginTop: -3,
                                    borderBottomEndRadius: 3,
                                    borderBottomLeftRadius: 3,
                                }}
                            />
                            <View className="flex-row justify-between pt-[10]">
                                <Text
                                    style={[
                                        globalStyles.bodyText,
                                        {
                                            color: colors.customWhite,
                                            fontSize: 17,
                                            fontWeight: 500,
                                            flex: 1,
                                        },
                                    ]}
                                >
                                    {item.title}
                                    {"\n"}
                                    <Text
                                        style={[
                                            globalStyles.bodyText,
                                            {
                                                fontSize: 13,
                                                lineHeight: 13 * 1.1,
                                                fontWeight: 300,
                                            },
                                        ]}
                                    >
                                        {remainingTimeCalculation(
                                            item.duration,
                                            item.current
                                        )}{" "}
                                        Left
                                    </Text>
                                </Text>
                                <MaterialCommunityIcons
                                    name="dots-vertical"
                                    size={25}
                                    color="white"
                                    style={{ marginRight: -7 }}
                                    onPress={() => {
                                        console.log(
                                            `Index # ${
                                                index + 1
                                            } dots-Vertical Clicked`
                                        );
                                    }}
                                />
                            </View>
                        </View>
                    );
                }}
                showsHorizontalScrollIndicator={false}
            />
        );
    };
    return (
        <View style={filmGlobalStyles.filmContainer}>
            <TouchableOpacity
                activeOpacity={0.8}
                className="pl-[20]"
                style={filmGlobalStyles.headerTitle}
                onPress={() => {
                    console.log("Navigate to Continue watching");
                }}
            >
                <Text style={globalStyles.sectionTitleText}>
                    Continue Watching for John
                </Text>
                <Entypo name="chevron-right" size={20} color="white" />
            </TouchableOpacity>
            <FilmFlatList />
        </View>
    );
};

export default ContinueWatchingRow;
