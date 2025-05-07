import {
    View,
    Text,
    StatusBar,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    Image,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Player from "@components/Player";
import PlayerContainer from "@components/PlayerContainer";
import { SafeAreaView } from "react-native-safe-area-context";
import { YellowButton, AwardsFestival } from "@components/CustomUI";
import {
    globalStyles,
    w33Percent,
    filmGlobalStyles,
} from "@styles/global.style";
import { colors, awardsData } from "@utils/Constants";
import { Entypo } from "@expo/vector-icons";
import JWPlayerService from "@services/JWPlayerService";
import FilmService from "@services/FilmService";
import { useQuery } from "@tanstack/react-query";
import { FilmRow } from "@components/Films";
import stripHtmlTag from "@utils/StripHtmlTag";

const FilmFilmScreen = ({ data }) => {
    const playerRef = useRef(null);
    const [playerLoaded, setPlayerLoaded] = useState(false);

    const {
        data: filmData,
        isPending: filmDataIsPending,
        isFetching: filmDataIsFetching,
    } = useQuery({
        queryKey: ["filmDataByID"],
        queryFn: async () => {
            return await FilmService.getFilmByID(data.id);
        },
    });

    const film = filmData?.[0];

    const {
        title,
        description,
        trailer_id,
        rating,
        genres,
        duration,
        categories,
        crews,
    } = film || {};

    const genresIds = genres?.map((item) => item.id).join(",") ?? "";
    const defaultPropertyID = "NLLhGCSw";

    const {
        data: moreFilm,
        isPending: moreFilmIsPending,
        isFetching: moreFilmIsFetching,
    } = useQuery({
        queryKey: ["moreFilmData", genresIds],
        queryFn: async () => {
            return await FilmService.getMoreFilm(genresIds);
        },
        enabled: !!filmData,
    });
    const {
        data: jwConfig,
        isPending: jwConfigIsPending,
        isFetching: jwConfigIsFetching,
    } = useQuery({
        queryKey: ["jwplayerConfig", trailer_id],
        queryFn: async () => {
            return await JWPlayerService.getJwplayerTrailer(
                defaultPropertyID,
                trailer_id
            );
        },
        enabled: !!trailer_id,
        refetchOnMount: "always",
    });
    if (filmDataIsFetching) {
        return (
            <View className="flex-1 justify-center items-center">
                <ActivityIndicator size="large" color="#FFC300" />
            </View>
        );
    }

    const onTime = (e) => {
        // var { position, duration } = e.nativeEvent;
        // eslint-disable-line
        // console.log("onTime was called with: ", position, duration);
    };
    const onLoaded = () => {
        setPlayerLoaded(true);
    };
    const onFullScreen = () => {
        <StatusBar hidden={true} />;
    };
    const onFullScreenExit = () => {
        <StatusBar hidden={false} />;
    };

    const renderPlayer = () => {
        if (!jwConfigIsFetching) {
            return (
                <>
                    <Player
                        ref={playerRef}
                        style={{ flex: 1 }}
                        config={{
                            autostart: true,
                            styling: {
                                colors: {},
                            },
                            controls: false,
                            repeat: true,
                            ...jwConfig,
                        }}
                        onTime={onTime}
                        onLoaded={onLoaded}
                        onFullScreen={onFullScreen}
                        onFullScreenExit={onFullScreenExit}
                    />
                    {!playerLoaded && (
                        <View
                            style={{
                                position: "absolute",
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                backgroundColor: "black",
                                justifyContent: "center",
                                alignItems: "center",
                                zIndex: 1,
                            }}
                        >
                            <ActivityIndicator size="large" color="#FFC300" />
                        </View>
                    )}
                </>
            );
        }
    };
    return (
        <SafeAreaView>
            <ScrollView overScrollMode="never" style={[, { opacity: 1 }]}>
                <PlayerContainer children={renderPlayer()} />
                <Text
                    style={[
                        globalStyles.headerText,
                        style.filmTitle,
                        globalStyles.xPadding,
                    ]}
                >
                    {title}
                </Text>
                <View style={[style.filmInfo, globalStyles.xPadding]}>
                    <Text style={[style.filmYear, globalStyles.bodyText]}>
                        2013
                    </Text>
                    <Entypo name="dot-single" size={30} color="#C1C1C1" />
                    <Text style={[style.filmRating, globalStyles.bodyText]}>
                        {rating}
                    </Text>
                    <Entypo name="dot-single" size={30} color="#C1C1C1" />
                    <Text style={[style.filmDuration, globalStyles.bodyText]}>
                        {duration} mins
                    </Text>
                    <Entypo name="dot-single" size={30} color="#C1C1C1" />
                    <Text style={[style.filmCountry, globalStyles.bodyText]}>
                        Philippines
                    </Text>
                </View>
                <View style={globalStyles.xPadding}>
                    <YellowButton icon="play" title="Watch Now" />
                </View>
                <View style={[style.filmGenre, globalStyles.xPadding]}>
                    {genres?.map((item) => (
                        <Text
                            key={item.id}
                            style={[globalStyles.bodyText, style.filmGenreText]}
                        >
                            {item.name}
                        </Text>
                    ))}
                    {categories?.map((item) => (
                        <Text
                            key={item.id}
                            style={[globalStyles.bodyText, style.filmGenreText]}
                        >
                            {item.name}
                        </Text>
                    ))}
                </View>
                <View style={globalStyles.xPadding}>
                    <Text
                        style={[
                            globalStyles.sectionTitleText,
                            { marginBottom: 8, fontSize: 16 },
                        ]}
                    >
                        SYNOPSIS
                    </Text>
                    <Text style={globalStyles.bodyText}>
                        {stripHtmlTag(description)}
                    </Text>
                </View>
                <View style={style.filmActions}>
                    <View style={style.filmAction}>
                        <Image
                            style={style.filmActionIcon}
                            source={require("@images/PlusIcon.png")}
                        />
                        <Text style={globalStyles.bodyText}>Watchlist</Text>
                    </View>
                    <View style={style.filmAction}>
                        <Image
                            style={style.filmActionIcon}
                            source={require("@images/SymbolsIcon.png")}
                        />
                        <Text style={globalStyles.bodyText}>Download</Text>
                    </View>
                </View>
                <View style={[globalStyles.xPadding, style.castCrewSection]}>
                    <Text
                        className="mb-4"
                        style={globalStyles.sectionTitleText}
                    >
                        CAST & CREW
                    </Text>
                    {crews?.map((item) => (
                        <View
                            key={item.id}
                            style={[{ width: w33Percent - 10 }]}
                        >
                            <Image
                                className="w-full rounded mb-2"
                                resizeMode="cover"
                                style={{ height: 140 }}
                                source={require("@images/default_avatar.png")}
                            />
                            <Text style={[globalStyles.sectionTitleText]}>
                                {item.name}
                            </Text>
                            <Text style={[globalStyles.bodyText]}>
                                {item.position}
                            </Text>
                        </View>
                    ))}
                </View>
                <View className="mb-[40]" style={globalStyles.xPadding}>
                    <Text
                        className="mb-3"
                        style={globalStyles.sectionTitleText}
                    >
                        AWARDS & FESTIVALS
                    </Text>
                    {awardsData.map((item, index) => {
                        return (
                            <AwardsFestival
                                key={index}
                                title={item.title}
                                subtitle={item.subtitle}
                                source={item.source}
                            />
                        );
                    })}
                </View>
                <FilmRow
                    title="MORE FILMS"
                    isPending={moreFilmIsPending}
                    films={moreFilm}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default FilmFilmScreen;

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
        paddingBlock: 30,
        gap: 40,
    },
    filmAction: {
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
    },
    filmActionIcon: {
        width: 20,
        height: 20,
        resizeMode: "contain",
    },
    castCrewSection: {
        backgroundColor: colors.customDarkGray,
        paddingBlock: 30,
        marginBottom: 30,
    },
});
