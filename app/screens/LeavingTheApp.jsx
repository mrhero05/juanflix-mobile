import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { images } from '@utils/Constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '@/src/styles/global.style';


const LeavingTheApp = () => {
  return (
    <>
        <SafeAreaView style={globalStyles.container} className="flex-1 min-h-screen-safe">
            <ImageBackground 
                className="min-h-screen-safe flex-1 items-center px-[20px]" 
                resizeMode="cover" 
                source={images.backgroundImg}>
                <Image
                    className="mt-[50px]"
                    source={images.brandLogo}
                    style={{width: 150, height: 50, resizeMode: 'contain' }}
                />
                <Text className="mt-[50px] text-2xl text-customYellow text-center">YOU ARE ABOUT TO LEAVE THE APP AND GO TO AN EXTERNAL WEBSITE.</Text>
            </ImageBackground>
        </SafeAreaView>
        </>
  )
}

export default LeavingTheApp