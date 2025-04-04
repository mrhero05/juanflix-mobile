import React, {useRef} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import "./global.css"
import { Link } from 'expo-router';

export default () => {

  return (
    <SafeAreaView className="flex-1 w-full">
      <ScrollView className="flex-1 bg-gray-400 h-screen">
        <View className="justify-center items-center bg-red-50 h-full">
          <Text className="font-bold text-3xl">Welcome To JuanFlix App</Text>
          <Link href="/signin" className='text-2xl'>Sign In</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
