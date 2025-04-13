import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const MainBanner = () => {
    const bannerImage = {
        uri: 'https://fdcp-public-assets.s3.ap-southeast-1.amazonaws.com/JuanFlix+Home+Banner+Mobile+374x649+px+(1).png', // change image dynamically
    };

    return (
        <View>
            <ImageBackground className="flex-1 min-h-[400px] min-w-full" source={bannerImage} resizeMode="cover">
            </ImageBackground>
        </View>
    );
};

export default MainBanner;
