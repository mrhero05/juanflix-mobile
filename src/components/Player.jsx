import React, {forwardRef} from 'react';
import {Platform} from 'react-native';

import JWPlayer from '@jwplayer/jwplayer-react-native';
import {JWPLAYER_LICENSE_IOS, JWPLAYER_LICENSE_ANDROID} from "@env"

export default forwardRef((props, ref) => {
  const { onLayout, tag, config, style } = props;

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
      style={[{flex: 1}, style]}
      config={{
        license: Platform.select({
            ios: JWPLAYER_LICENSE_IOS, 
            android: JWPLAYER_LICENSE_ANDROID
        }),
        backgroundAudioEnabled: true,
        fullScreenOnLandscape: false,
        styling: {
          colors: {},
        },
        ...config
      }}
      {...newProps}
      onPlayerError={e => console.log(e.nativeEvent?.error || 'Player Error.') }
    />
  );
});
