import { Stack } from "expo-router";
import { Button, Image, View } from "react-native";
import { images, colors } from "@utils/Constants";
import { headerGlobalStyles } from "@styles/global.style";
import { useAuth } from "@context/AuthContext";
import { HamburgerIcon } from "@navigation/HeaderIcons";

export default () => {
    const { userLogout } = useAuth();
    return (
        <Stack
            screenOptions={{
                headerStyle: headerGlobalStyles.headerDefaultStyle,
                headerTintColor: colors.customWhite,
                contentStyle: headerGlobalStyles.defaultBackground,
            }}
        >
            <Stack.Screen
                name="UserProfileScreen"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="SearchScreen"
                options={{
                    headerTitle: "",
                    headerRight: () => (
                        <View style={headerGlobalStyles.customHeaderStyle}>
                            <HamburgerIcon />
                        </View>
                    ),
                }}
            />
            <Stack.Screen
                name="MainJwplayerScreen"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="ContinueWatchingScreen"
                options={{
                    title: "Continue Watching",
                }}
            />
        </Stack>
    );
};
