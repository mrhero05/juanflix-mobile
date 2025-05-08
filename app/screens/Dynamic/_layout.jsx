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
                    headerTransparent: true,
                    headerTitleAlign: "center",
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
                        // this section is for testing only it will be removed once the screen is finished
                        <Button
                            title="Logout"
                            onPress={() => {
                                userLogout();
                            }}
                        />
                    ),
                }}
            />
        </Stack>
    );
};
