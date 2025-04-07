
import React, {useRef} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import "@tailWindGlobalCss/global.css"
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

export default () => {
  return (
      <SafeAreaView>
        <ScrollView>
          <View className="flex-1 justify-center items-center w-full">
            <Text className="font-bold text-2xl">Welcome To Juanflix</Text>
            <Link href="screens/Signup">Sign up</Link>
          </View>
        </ScrollView>
      </SafeAreaView>
  );
};
