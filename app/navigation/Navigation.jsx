import React from "react";
import { useAuth } from "@context/AuthContext";
import { Stack } from "expo-router";
import { Image, StatusBar } from "react-native";
import { colors, images } from "@utils/Constants";
import "@styles/global.css";

const navigation = () => {
    const { authState } = useAuth();
    return (
        <>
            <StatusBar
                backgroundColor={colors.customBlack}
                barStyle="light-content"
            />
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen
                    name="index"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="screens/LeavingTheAppScreen"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="screens/SignupScreen"
                    options={{
                        headerTransparent: true,
                        headerTintColor: colors.customWhite,
                        headerTitle: () => (
                            <Image
                                source={images.brandLogo}
                                style={{
                                    marginLeft: -20,
                                    width: 100,
                                    height: 40,
                                    resizeMode: "contain",
                                }}
                            />
                        ),
                    }}
                />
                <Stack.Screen
                    name="screens/Home/HomeScreen"
                    options={{ headerShown: false }}
                />
            </Stack>
        </>
    );
};

export default navigation;
