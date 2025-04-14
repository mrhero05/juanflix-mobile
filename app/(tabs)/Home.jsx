import { View, Text, Button } from "react-native";
import React, { useEffect } from "react";
import LocalStorageService from "@services/LocalStorageService";
import { useAuth, authState } from "@context/AuthContext";
import { Redirect, router, useNavigation } from "expo-router";
const Home = () => {
    const { userLogout, authState } = useAuth();

    return (
        <View>
            <Button
                title="test"
                onPress={async () => {
                    const userAuth = await LocalStorageService.getData(
                        "userToken"
                    );
                    const isAuthenticated = await LocalStorageService.getData(
                        "isAuthenticated"
                    );
                    if (userAuth) {
                        console.log(isAuthenticated);
                        console.log(userAuth);
                    }
                }}
            ></Button>
            <Button
                title="logout"
                onPress={() => {
                    userLogout();
                }}
            />
        </View>
    );
};

export default Home;
