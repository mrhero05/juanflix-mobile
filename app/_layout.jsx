import "@styles/global.css";
import { AuthProvider } from "@context/AuthContext";
import React from "react";
import { Stack } from "expo-router";
import { Button, Image, StatusBar, StyleSheet, View } from "react-native";
import { colors, images } from "@utils/Constants";
import "@styles/global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { headerGlobalStyles } from "@styles/global.style";
import AppBarBadge from "@components/CustomUI/AppBarBadge";
const queryClient = new QueryClient();

export default function RootLayout() {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <StatusBar
                    backgroundColor={colors.customBlack}
                    barStyle="light-content"
                />
                <Stack
                    screenOptions={{
                        headerTintColor: colors.customWhite,
                        contentStyle: headerGlobalStyles.defaultBackground,
                    }}
                >
                    <Stack.Screen
                        name="(tabs)"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="index"
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="screens/Dynamic"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="screens/Static/LeavingTheAppScreen"
                        options={{
                            headerShown: false,
                            animation: "fade_from_bottom",
                        }}
                    />
                    <Stack.Screen
                        name="screens/Static/SignupScreen"
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
                </Stack>
            </AuthProvider>
        </QueryClientProvider>
    );
}
