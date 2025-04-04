import { SafeAreaView, ImageBackground, ScrollView, StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react'

const SignIn = () => {
  const imageUrl = require('../../src/assets/images/BG.png')
  return (
    // <SafeAreaView className="flex-1 w-full">
    //   <ScrollView className="flex-1 bg-gray-400 h-screen">
    //     <View className="justify-center items-center bg-red-50 h-full">
    //       <Text className="font-bold text-3xl">SIGN IN</Text>
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
    <View className="flex-1 items-center w-full">
      <ImageBackground source={imageUrl} resizeMode="cover" className="flex-1 justify-center w-full">
        <View className="flex-1 p-[20px] pt-[60px] w-full">
              <Text className="text-custom-yellow text-center font-bold text-3xl">SIGN IN</Text>
              <Text className="text-white text-center pt-[10px]">Log in quickly using your preferred method.</Text>
              <Text className="text-white pt-[30px]">Email Address:</Text>
              <TextInput className="p-[10px] text-white" style={{
                    borderBottomColor: '#fff',
                    borderBottomWidth: 1,
                  }}
                  placeholderTextColor="white"
                  placeholder="jdoe@gmail.com"
                />
              <Text className="text-white pt-[20px]">Email Address:</Text>
              <TextInput className="p-[10px] text-white" style={{
                    borderBottomColor: '#fff',
                    borderBottomWidth: 1,
                  }}
                  placeholderTextColor="white"
                  placeholder="jdoe@gmail.com"
                />
        </View>
      </ImageBackground>
    </View>
  )
}

export default SignIn