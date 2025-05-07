import { View, Text, Button } from "react-native";
import React, { useEffect } from "react";
import LocalStorageService from "@services/LocalStorageService";
import { useAuth, authState } from "@context/AuthContext";

const Account = () => {
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
                    const userProfile = await LocalStorageService.getData(
                        "userProfile"
                    );
                    if (userAuth) {
                        console.log(isAuthenticated);
                        console.log(userAuth);
                        console.log(userProfile);
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

export default Account;
