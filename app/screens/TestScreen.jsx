import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Button } from "react-native-paper";
import LocalStorageService from "@/src/services/LocalStorageService";

const TestScreen = () => {
    useEffect(() => {
        const loadData = async () => {
            console.log("run test");
            const value = await LocalStorageService.getData("customerData");
            console.log("customerData", value);
        };

        loadData();
    }, []);

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
    return (
        <View>
            <Button
                title="Save Customer Data Test"
                onPress={saveCustomerData}
            />
        </View>
    );
};

export default TestScreen;
