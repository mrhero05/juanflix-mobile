import { Stack } from "expo-router";
import { Button, Image } from "react-native";
import { images, colors } from "@utils/Constants";
import { headerGlobalStyles } from "@styles/global.style";
import { useAuth } from "@context/AuthContext";

export default () => {
    const { userLogout } = useAuth();
    return (
        <Stack
            screenOptions={{
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
        </Stack>
    );
};
