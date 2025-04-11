import { View, Text, Button } from "react-native";
import React, { useEffect } from "react";
// import { Button } from "react-native-paper";
import LocalStorageService from "@services/LocalStorageService";
import { SafeAreaView } from "react-native-safe-area-context";

const TestScreen = () => {
    // useEffect(() => {
    //     const loadData = async () => {
    //         console.log("run test");
    //         const value = await LocalStorageService.getData("customerData");
    //         console.log("customerData", value);
    //     };

    //     loadData();
    // }, []);

    const saveCustomerData = async () => {
        console.log("trigger save");
        const customerDetails = {
            name: "Vince",
            email: "vcanezal@glimsol.com",
            subscription: "Premium",
        };

        await LocalStorageService.saveData(
            "customerData",
            JSON.stringify(customerDetails)
        );
        console.log("Customer details saved");
    };
    const getCustomerData = async () => {
        console.log("run test");
        const value = await LocalStorageService.getData("customerData");
        console.log("customerData", value);
    };

    return (
        <SafeAreaView className="flex-1 justify-center items-center">
            <View className="flex-1 justify-center items-center">
                <Text>test</Text>
                <Button
                    title="Save Customer Data Test"
                    onPress={saveCustomerData}
                />
                <Button
                    title="Get Customer Data Test"
                    onPress={getCustomerData}
                />
            </View>
        </SafeAreaView>
    );
};

export default TestScreen;
