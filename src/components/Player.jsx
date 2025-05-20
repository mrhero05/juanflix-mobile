import React, { forwardRef } from "react";
import { Platform } from "react-native";

import JWPlayer from "@jwplayer/jwplayer-react-native";

export default forwardRef((props, ref) => {
    const { onLayout, tag, config, style } = props;
    const licenseIOS = "BE3t1ji4mIggw5r0boU8owv1u+6bAoGsPW76GmHnc8US1yV2";
    const licenseAndroid = "MHyF0LDg5qDscWrxVuHkYik+T1uIo6XVpP4PU9yVcrZ6pD4x";

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
                fullScreenOnLandscape: true,
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
