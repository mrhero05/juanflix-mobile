import React, {useRef} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import "./global.css"
import { Link } from 'expo-router';

export default () => {

  return (
    <SafeAreaView className="flex-1 w-full">
      <ScrollView className="flex-1 bg-gray-400">
        <View className="flex-1 justify-center items-center">
          <Text>Welcome To JuanFlix App</Text>
          <Link href="/signin">Sign In</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
