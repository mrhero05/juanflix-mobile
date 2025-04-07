import { View, Text, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import TitleDescription from '@components/TitleDescription';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '@/src/styles/global.style';

const Index = () => {
    const imageBackgroundSource = require('@images/Juanflix-Background.png')
    return (
        <SafeAreaView style={globalStyles.container} className="flex-1">
            <ScrollView>
                <ImageBackground className="h-full" source={imageBackgroundSource}>
                    <View className="flex-1 w-full bg-black">
                        <TitleDescription
                            title="SIGN IN" 
                            description="Log in quickly using your preferred method." />
                    </View>
                    
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Index