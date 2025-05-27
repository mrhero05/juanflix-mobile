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
import { HamburgerIcon } from "@navigation/HeaderIcons";
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
                        name="(drawer)"
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
                    <Stack.Screen
                        name="screens/Static/OtpVerificationScreen"
                        options={{
                            headerTitle: "OTP Verification",
                            headerStyle: headerGlobalStyles.headerDefaultStyle,
                        }}
                    />
                    <Stack.Screen
                        name="screens/Static/InAppBrowserScreen"
                        options={{
                            headerTitle: "Web Browser",
                            headerStyle: headerGlobalStyles.headerDefaultStyle,
                        }}
                    />
                    <Stack.Screen
                        name="screens/Static/AboutJuanflixScreen"
                        options={{
                            animation: "slide_from_left",
                            headerTitle: "About",
                            headerStyle: headerGlobalStyles.headerDefaultStyle,
                        }}
                    />
                    <Stack.Screen
                        name="screens/Static/HelpCenterScreen"
                        options={{
                            animation: "slide_from_left",
                            headerTitle: "Help Center",
                            headerStyle: headerGlobalStyles.headerDefaultStyle,
                        }}
                    />
                    <Stack.Screen
                        name="screens/Static/TermsOfUseScreen"
                        options={{
                            animation: "slide_from_left",
                            headerTitle: "Terms of Use",
                            headerStyle: headerGlobalStyles.headerDefaultStyle,
                        }}
                    />
                </Stack>
            </AuthProvider>
        </QueryClientProvider>
    );
}
