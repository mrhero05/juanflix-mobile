
import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import "@tailWindGlobalCss/global.css"
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import LocalStorageService from '@/src/services/LocalStorageService';

export default () => {

    useEffect(() => {
        const loadData = async () => {
            console.log('run test');
            const value = await LocalStorageService.getData('customerData');
            console.log('customerData', value);
        };
        
        loadData();
    }, []);

    const saveCustomerData = async () => {
        console.log('trigger save');
        const customerDetails = {
          name: 'Vince',
          email: 'vcanezal@glimsol.com',
          subscription: 'Premium',
        };
    
        await LocalStorageService.saveData('customerData', JSON.stringify(customerDetails));
        console.log('Customer details saved');
    };
    

    return (
        <SafeAreaView>
            <ScrollView>
                <View className="flex-1 justify-center items-center w-full">
                    <Text className="font-bold text-2xl">Welcome To Juanflix</Text>
                    <Link href="screens/Signup">Sign up</Link>
                    <Button title="Save Customer Data Test" onPress={saveCustomerData} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
