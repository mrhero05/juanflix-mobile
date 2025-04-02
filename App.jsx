import { StatusBar } from 'expo-status-bar';
import React, {useRef} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Player from './src/components/Player';
import PlayerContainer from './src/components/PlayerContainer';

export default () => {
  const playerRef = useRef([]);

  const onTime = e => {
    // var {position, duration} = e.nativeEvent;
    // eslint-disable-line
    // console.log('onTime was called with: ', position, duration);
  };

  const onFullScreen = () => {
    StatusBar.setHidden(true);
  };
  const onPlay = e => {
    console.log('Playing')
  }
  const onFullScreenExit = () => {
    StatusBar.setHidden(false);
  };
  const onComplete = () => {
    console.log('Playing is Complete')
  }
  // let jwConfig = {
  //   "title": "Single Inline Linear Preroll",
  //   "playlist": [
  //     {
  //       "title": "Single Inline Linear Preroll",
  //       "file": "https://content.bitsontherun.com/videos/q1fx20VZ-52qL9xLP.mp4"
  //     }
  //   ]
  // }
  let jwConfig = {
    "title": "Verdict Trl Hd (720p)",
    "playlist": [
      {
        "image": "https://cdn.jwplayer.com/v2/media/KHIh5CyK/poster.jpg?width=720",
        "images": [
          {
            "src": "https://cdn.jwplayer.com/v2/media/KHIh5CyK/poster.jpg?width=320",
            "width": 320,
            "type": "image/jpeg"
          },
          {
            "src": "https://cdn.jwplayer.com/v2/media/KHIh5CyK/poster.jpg?width=480",
            "width": 480,
            "type": "image/jpeg"
          },
          {
            "src": "https://cdn.jwplayer.com/v2/media/KHIh5CyK/poster.jpg?width=640",
            "width": 640,
            "type": "image/jpeg"
          },
          {
            "src": "https://cdn.jwplayer.com/v2/media/KHIh5CyK/poster.jpg?width=720",
            "width": 720,
            "type": "image/jpeg"
          },
          {
            "src": "https://cdn.jwplayer.com/v2/media/KHIh5CyK/poster.jpg?width=1280",
            "width": 1280,
            "type": "image/jpeg"
          },
          {
            "src": "https://cdn.jwplayer.com/v2/media/KHIh5CyK/poster.jpg?width=1920",
            "width": 1920,
            "type": "image/jpeg"
          }
        ],
        "title": "Verdict Trl Hd (720p)",
        "mediaid": "KHIh5CyK",
        "link": null,
        "duration": 41.729,
        "pubdate": 1741829949,
        "description": null,
        "tags": "Verdict",
        "sources": [
          {
            "file": "https://cdn.jwplayer.com/manifests/KHIh5CyK.m3u8",
            "type": "application/vnd.apple.mpegurl"
          },
          {
            "file": "https://cdn.jwplayer.com/videos/KHIh5CyK-wvTWnj98.mp4",
            "type": "video/mp4",
            "width": 320,
            "height": 180,
            "label": "180p",
            "bitrate": 268390,
            "framerate": 24,
            "filesize": 1375503
          },
          {
            "file": "https://cdn.jwplayer.com/videos/KHIh5CyK-mxNiZGcl.mp4",
            "type": "video/mp4",
            "width": 480,
            "height": 270,
            "label": "270p",
            "bitrate": 374469,
            "framerate": 24,
            "filesize": 1919157
          },
          {
            "file": "https://cdn.jwplayer.com/videos/KHIh5CyK-XyxauHgl.mp4",
            "type": "video/mp4",
            "width": 1280,
            "height": 720,
            "label": "720p",
            "bitrate": 1047498,
            "framerate": 24,
            "filesize": 5368431
          },
          {
            "file": "https://cdn.jwplayer.com/videos/KHIh5CyK-V0ih3XHX.m4a",
            "type": "audio/mp4",
            "width": 320,
            "height": 180,
            "label": "180p",
            "bitrate": 115737,
            "filesize": 593156
          },
          {
            "file": "https://cdn.jwplayer.com/videos/KHIh5CyK-DfShx2hd.mp4",
            "type": "video/mp4",
            "width": 640,
            "height": 360,
            "label": "360p",
            "bitrate": 432476,
            "framerate": 24,
            "filesize": 2216444
          },
          {
            "file": "https://cdn.jwplayer.com/videos/KHIh5CyK-6wEKPkyM.mp4",
            "type": "video/mp4",
            "width": 960,
            "height": 540,
            "label": "540p",
            "bitrate": 687908,
            "framerate": 24,
            "filesize": 3525531
          }
        ],
        "tracks": [
          {
            "file": "https://cdn.jwplayer.com/strips/KHIh5CyK-120.vtt",
            "kind": "thumbnails"
          }
        ]
      }
    ]

  }
  const renderPlayer = () => {
    return (
      <Player
        ref={playerRef}
        style={{flex: 1}}
        config={{
          autostart: false,
          styling: {
            colors: {},
          },
          ...jwConfig
        }}
        onTime={onTime}
        onFullScreen={onFullScreen}
        onFullScreenExit={onFullScreenExit}
        onPlay={onPlay}
        onComplete={onComplete}
      />
    );
  };

  return (
    <PlayerContainer
      children={renderPlayer()}
      text="Welcome to"
    />
  );
};
