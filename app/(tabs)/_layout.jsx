import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Image, StyleSheet, View } from "react-native";
import { images, colors } from "@utils/Constants";
import { useAuth } from "@context/AuthContext";
import AppBarBadge from "@components/CustomUI/AppBarBadge";
import { headerGlobalStyles } from "@styles/global.style";

export default () => {
    const { authState } = useAuth();
    return (
        <Tabs
            screenOptions={{
                animation: "shift",
                headerShown: false,
                tabBarActiveTintColor: colors.customYellow,
                headerTintColor: colors.customWhite,
                sceneStyle: headerGlobalStyles.defaultBackground,
                headerStyle: headerGlobalStyles.headerDefaultStyle,
                tabBarStyle: headerGlobalStyles.defaultBackground,
            }}
        >
            <Tabs.Screen
                name="Home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={
                                focused
                                    ? images.homeIconActive
                                    : images.homeIcon
                            }
                            style={headerGlobalStyles.customIconSize}
                        />
                    ),
                    lazy: false,
                }}
            />
            <Tabs.Screen
                name="Browse"
                options={{
                    title: "Browse",
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={
                                focused
                                    ? images.browseIconActive
                                    : images.browseIcon
                            }
                            style={headerGlobalStyles.customIconSize}
                        />
                    ),
                    lazy: false,
                }}
            />
            <Tabs.Screen
                name="Watchlist"
                options={{
                    title: "Watchlist",
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={
                                focused
                                    ? images.watchListIconActive
                                    : images.watchListIcon
                            }
                            style={headerGlobalStyles.customIconSize}
                        />
                    ),
                    lazy: false,
                }}
            />
            <Tabs.Screen
                name="Account"
                options={{
                    title: "Account",
                    tabBarIcon: ({ color, size }) =>
                        authState.profile ? (
                            <Image
                                source={{
                                    uri: authState.profile,
                                }}
                                style={{
                                    width: size,
                                    height: size,
                                    borderRadius: 2,
                                }}
                            />
                        ) : (
                            <FontAwesome
                                size={size}
                                name="user"
                                color={color}
                            />
                        ),
                    lazy: false,
                }}
            />
        </Tabs>
    );
};
