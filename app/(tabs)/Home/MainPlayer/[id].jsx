import { View, Text, StatusBar } from "react-native";
import React, { useRef, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import PlayerContainer from "@components/PlayerContainer";
import Player from "@components/Player";
import { Loader } from "@components/CustomUI/";
import useJwpTrailerQuery from "@queries/useJwpTrailerQuery";

const MainPlayer = () => {
    const { id } = useLocalSearchParams();
    const playerRef = useRef(null);
    const [playerLoaded, setPlayerLoaded] = useState(false);

    const {
        data: jwConfig,
        isPending: jwConfigIsPending,
        isError: jwConfigIsError,
        isFetching: jwConfigIsFetching,
    } = useJwpTrailerQuery(id);

    const onTime = (e) => {
        // var { position, duration } = e.nativeEvent;
        // eslint-disable-line
        // console.log("onTime was called with: ", position, duration);
    };
    const onLoaded = () => {
        setPlayerLoaded(true);
        playerRef.current?.setFullscreen(true);
    };
    const onFullScreen = () => {
        <StatusBar hidden={true} />;
    };
    const onFullScreenExit = () => {
        <StatusBar hidden={false} />;
        router.back();
    };
    if (jwConfigIsFetching || jwConfigIsError) {
        return <Loader />;
    }

    const renderPlayer = () => {
        if (!jwConfigIsFetching) {
            return (
                <>
                    <Player
                        ref={playerRef}
                        style={{ flex: 1 }}
                        config={{
                            autostart: true,
                            fullScreenOnLandscape: true,
                            landscapeOnFullScreen: true,
                            portraitOnExitFullScreen: true,
                            exitFullScreenOnPortrait: true,
                            styling: {
                                colors: {},
                            },
                            controls: true,
                            ...jwConfig,
                        }}
                        onLoaded={onLoaded}
                        onFullScreen={onFullScreen}
                        onFullScreenExit={onFullScreenExit}
                    />
                    {!playerLoaded && <Loader />}
                </>
            );
        }
    };
    return (
        <View className="flex-1 justify-center items-center">
            <PlayerContainer children={renderPlayer()} />
        </View>
    );
};

export default MainPlayer;
