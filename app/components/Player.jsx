import React, { forwardRef } from "react";
import { Platform } from "react-native";

import JWPlayer from "@jwplayer/jwplayer-react-native";

export default forwardRef((props, ref) => {
    const { onLayout, tag, config, style } = props;
    const licenseIOS = process.env.EXPO_PUBLIC_JWPLAYER_LICENSE_IOS;
    const licenseAndroid = process.env.EXPO_PUBLIC_JWPLAYER_LICENSE_ANDROID;

    const newProps = Object.assign({}, props);
    delete newProps.ref;
    delete newProps.key;
    delete newProps.config;
    delete newProps.style;

    return (
        <JWPlayer
            onLayout={onLayout}
            ref={ref}
            key={tag}
            style={[{ flex: 1 }, style]}
            config={{
                license: Platform.select({
                    ios: licenseIOS,
                    android: licenseAndroid,
                }),
                backgroundAudioEnabled: true,
                fullScreenOnLandscape: false,
                styling: {
                    colors: {},
                },
                ...config,
            }}
            {...newProps}
            onPlayerError={(e) =>
                console.log(e.nativeEvent?.error || "Player Error.")
            }
        />
    );
});
