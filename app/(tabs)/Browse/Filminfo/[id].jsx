import { View, Text, StatusBar, ScrollView, StyleSheet } from "react-native";
import React, { useRef } from "react";
import { useLocalSearchParams } from "expo-router";
import Player from "@components/Player";
import PlayerContainer from "@components/PlayerContainer";
import { SafeAreaView } from "react-native-safe-area-context";
import { YellowButton } from "@components/CustomUI";
import { globalStyles } from "@styles/global.style";
import { colors } from "@utils/Constants";
import { Entypo } from "@expo/vector-icons";

const FilmInfo = () => {
    const { id } = useLocalSearchParams();
    console.log(id);
    const playerRef = useRef([]);

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
    let jwConfig = {
        title: "Verdict Trl Hd (720p)",
        playlist: [
            {
                image: "https://cdn.jwplayer.com/v2/media/KHIh5CyK/poster.jpg?width=720",
                images: [
                    {
                        src: "https://cdn.jwplayer.com/v2/media/KHIh5CyK/poster.jpg?width=320",
                        width: 320,
                        type: "image/jpeg",
                    },
                    {
                        src: "https://cdn.jwplayer.com/v2/media/KHIh5CyK/poster.jpg?width=480",
                        width: 480,
                        type: "image/jpeg",
                    },
                    {
                        src: "https://cdn.jwplayer.com/v2/media/KHIh5CyK/poster.jpg?width=640",
                        width: 640,
                        type: "image/jpeg",
                    },
                    {
                        src: "https://cdn.jwplayer.com/v2/media/KHIh5CyK/poster.jpg?width=720",
                        width: 720,
                        type: "image/jpeg",
                    },
                    {
                        src: "https://cdn.jwplayer.com/v2/media/KHIh5CyK/poster.jpg?width=1280",
                        width: 1280,
                        type: "image/jpeg",
                    },
                    {
                        src: "https://cdn.jwplayer.com/v2/media/KHIh5CyK/poster.jpg?width=1920",
                        width: 1920,
                        type: "image/jpeg",
                    },
                ],
                title: "Verdict Trl Hd (720p)",
                mediaid: "KHIh5CyK",
                link: null,
                duration: 41.729,
                pubdate: 1741829949,
                description: null,
                tags: "Verdict",
                sources: [
                    {
                        file: "https://cdn.jwplayer.com/manifests/KHIh5CyK.m3u8",
                        type: "application/vnd.apple.mpegurl",
                    },
                    {
                        file: "https://cdn.jwplayer.com/videos/KHIh5CyK-wvTWnj98.mp4",
                        type: "video/mp4",
                        width: 320,
                        height: 180,
                        label: "180p",
                        bitrate: 268390,
                        framerate: 24,
                        filesize: 1375503,
                    },
                    {
                        file: "https://cdn.jwplayer.com/videos/KHIh5CyK-mxNiZGcl.mp4",
                        type: "video/mp4",
                        width: 480,
                        height: 270,
                        label: "270p",
                        bitrate: 374469,
                        framerate: 24,
                        filesize: 1919157,
                    },
                    {
                        file: "https://cdn.jwplayer.com/videos/KHIh5CyK-XyxauHgl.mp4",
                        type: "video/mp4",
                        width: 1280,
                        height: 720,
                        label: "720p",
                        bitrate: 1047498,
                        framerate: 24,
                        filesize: 5368431,
                    },
                    {
                        file: "https://cdn.jwplayer.com/videos/KHIh5CyK-V0ih3XHX.m4a",
                        type: "audio/mp4",
                        width: 320,
                        height: 180,
                        label: "180p",
                        bitrate: 115737,
                        filesize: 593156,
                    },
                    {
                        file: "https://cdn.jwplayer.com/videos/KHIh5CyK-DfShx2hd.mp4",
                        type: "video/mp4",
                        width: 640,
                        height: 360,
                        label: "360p",
                        bitrate: 432476,
                        framerate: 24,
                        filesize: 2216444,
                    },
                    {
                        file: "https://cdn.jwplayer.com/videos/KHIh5CyK-6wEKPkyM.mp4",
                        type: "video/mp4",
                        width: 960,
                        height: 540,
                        label: "540p",
                        bitrate: 687908,
                        framerate: 24,
                        filesize: 3525531,
                    },
                ],
                tracks: [
                    {
                        file: "https://cdn.jwplayer.com/strips/KHIh5CyK-120.vtt",
                        kind: "thumbnails",
                    },
                ],
            },
        ],
    };
    const renderPlayer = () => {
        return (
            <Player
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
                    Jodilerks Dela Cruz, Employee of the Month
                </Text>
                <View style={style.filmInfo}>
                    <Text style={[style.filmYear, globalStyles.bodyText]}>
                        2013
                    </Text>
                    <Entypo name="dot-single" size={30} color="#C1C1C1" />
                    <Text style={[style.filmRating, globalStyles.bodyText]}>
                        R13
                    </Text>
                    <Entypo name="dot-single" size={30} color="#C1C1C1" />
                    <Text style={[style.filmDuration, globalStyles.bodyText]}>
                        13 mins
                    </Text>
                    <Entypo name="dot-single" size={30} color="#C1C1C1" />
                    <Text style={[style.filmCountry, globalStyles.bodyText]}>
                        Philippines
                    </Text>
                </View>
                <YellowButton icon="play" title="Watch Now" />
                <View style={style.filmGenre}>
                    <Text style={[globalStyles.bodyText, style.filmGenreText]}>
                        Short Film
                    </Text>
                    <Text style={[globalStyles.bodyText, style.filmGenreText]}>
                        Drama
                    </Text>
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
                        Previously dedicated to her job at a soon-to-close gas
                        station, the subject devotes her last night of
                        employment to some questionable acts, thereby reflecting
                        the increasingly anarchic nature of the society around
                        her.
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
