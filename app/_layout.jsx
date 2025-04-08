import { Link, Stack } from "expo-router";
import { Image, StatusBar } from "react-native";
import { colors, images } from "@utils/Constants";
import "@tailWindGlobalCss/global.css";
import { Appbar } from "react-native-paper";

export default function RootLayout() {
    return (
        <>
            <StatusBar
                backgroundColor={colors.customBlack}
                barStyle="light-content"
            />
            <Stack>
                <Stack.Screen
                    name="index"
                    options={{
                        headerShown: false,
                        headerTransparent: true,
                        headerTitleAlign: "center",
                        headerLeft: () => (
                            <Appbar.Action
                                color={colors.customWhite}
                                icon="menu"
                                size={30}
                                style={{
                                    marginLeft: -10,
                                }}
                                isLeading
                            />
                        ),
                        headerTitle: () => (
                            <Image
                                source={images.brandLogo}
                                style={{
                                    width: 100,
                                    height: 40,
                                    resizeMode: "contain",
                                }}
                            />
                        ),
                        headerRight: () => (
                            <Link
                                className="text-customWhite"
                                href="screens/Signup"
                            >
                                Sign up
                            </Link>
                        ),
                    }}
                />
                <Stack.Screen
                    name="screens/LeavingTheApp"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="screens/Signup"
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
        </>
    );
}
