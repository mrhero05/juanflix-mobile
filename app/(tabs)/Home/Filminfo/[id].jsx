import {
    View,
    Text,
    StatusBar,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import Player from "@components/Player";
import PlayerContainer from "@components/PlayerContainer";
import { SafeAreaView } from "react-native-safe-area-context";
import { YellowButton } from "@components/CustomUI";
import { globalStyles } from "@styles/global.style";
import { colors } from "@utils/Constants";
import { Entypo } from "@expo/vector-icons";
import JWPlayerService from "@services/JWPlayerService";
import { useQuery } from "@tanstack/react-query";

const FilmInfo = () => {
    const filmInformations = useLocalSearchParams();
    const playerRef = useRef(null);
    const genresObject = JSON.parse(filmInformations.genres);
    const categoriesObject = JSON.parse(filmInformations.categories);
    const defaultPropertyID = "NLLhGCSw";

    const stripHtmlTag = (text) => {
        return text.replace(/<[^>]*>/g, "");
    };

    const { data, isPending, isFetching } = useQuery({
        queryKey: ["filmInformation"],
        queryFn: async () => {
            return await JWPlayerService.getJwplayerTrailer(
                defaultPropertyID,
                filmInformations.trailer_src
            );
        },
        cacheTime: 0,
        refetchOnMount: "always",
    });

    const onTime = (e) => {
        // var {position, duration} = e.nativeEvent;
        // eslint-disable-line
        // console.log('onTime was called with: ', position, duration);
    };
    const onFullScreen = () => {
        <StatusBar hidden={true} />;
    };

    const onFullScreenExit = () => {
        <StatusBar hidden={false} />;
    };

    let jwConfig = data;

    const renderPlayer = () => {
        if (isFetching) {
            return (
                <View className="flex-1 justify-center items-center">
                    <ActivityIndicator size="large" color="#FFC300" />
                </View>
            );
        }
        return (
            <Player
                // key={
                //     playerRef?.current?.ref_key
                //         ? playerRef?.current?.ref_key
                //         : null
                // }
                ref={playerRef}
                style={{ flex: 1 }}
                config={{
                    autostart: false,
                    styling: {
                        colors: {},
                    },
                    ...jwConfig,
                }}
                onTime={onTime}
                onFullScreen={onFullScreen}
                onFullScreenExit={onFullScreenExit}
            />
        );
    };
    return (
        <SafeAreaView>
            <ScrollView overScrollMode="never" style={globalStyles.xPadding}>
                <PlayerContainer children={renderPlayer()} />
                <Text style={[globalStyles.headerText, style.filmTitle]}>
                    {filmInformations.title}
                </Text>
                <View style={style.filmInfo}>
                    <Text style={[style.filmYear, globalStyles.bodyText]}>
                        2013
                    </Text>
                    <Entypo name="dot-single" size={30} color="#C1C1C1" />
                    <Text style={[style.filmRating, globalStyles.bodyText]}>
                        {filmInformations.rating}
                    </Text>
                    <Entypo name="dot-single" size={30} color="#C1C1C1" />
                    <Text style={[style.filmDuration, globalStyles.bodyText]}>
                        {filmInformations.duration} mins
                    </Text>
                    <Entypo name="dot-single" size={30} color="#C1C1C1" />
                    <Text style={[style.filmCountry, globalStyles.bodyText]}>
                        Philippines
                    </Text>
                </View>
                <YellowButton icon="play" title="Watch Now" />
                <View style={style.filmGenre}>
                    {genresObject.map((item) => (
                        <Text
                            key={item.id}
                            style={[globalStyles.bodyText, style.filmGenreText]}
                        >
                            {item.name}
                        </Text>
                    ))}
                    {categoriesObject.map((item) => (
                        <Text
                            key={item.id}
                            style={[globalStyles.bodyText, style.filmGenreText]}
                        >
                            {item.name}
                        </Text>
                    ))}
                </View>
                <View>
                    <Text
                        style={[
                            globalStyles.sectionTitleText,
                            { marginBottom: 8, fontSize: 16 },
                        ]}
                    >
                        SYNOPSIS
                    </Text>
                    <Text style={globalStyles.bodyText}>
                        {stripHtmlTag(filmInformations.description)}
                    </Text>
                </View>
                <View style={style.filmActions}>
                    <Text style={globalStyles.bodyText}>Watchlist</Text>
                    <Text style={globalStyles.bodyText}>Rate</Text>
                    <Text style={globalStyles.bodyText}>Download</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default FilmInfo;

const style = StyleSheet.create({
    filmTitle: {
        textAlign: "center",
        color: colors.customWhite,
        lineHeight: 30 * 1.2,
    },
    filmInfo: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingBlock: 30,
    },
    filmGenre: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        paddingBlock: 20,
    },
    filmGenreText: {
        borderRightWidth: 1,
        borderColor: colors.customGray,
        paddingRight: 15,
        paddingBlock: 3,
    },
    filmYear: {},
    filmRating: {
        backgroundColor: "#2e2e2e",
        paddingInline: 10,
        paddingBlock: 1,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: colors.customGray,
    },
    filmDuration: {},
    filmCountry: {},
    filmActions: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
});
