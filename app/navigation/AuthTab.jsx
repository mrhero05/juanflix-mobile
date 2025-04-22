import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Image, StyleSheet, View } from "react-native";
import { images, colors } from "@utils/Constants";
import { useAuth } from "@context/AuthContext";
import AppBarBadge from "@components/CustomUI/AppBarBadge";
import { headerGlobalStyles } from "@styles/global.style";

const AuthTab = () => {
    const { authState } = useAuth();
    return (
        <Tabs
            screenOptions={{
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
                    headerRight: () => (
                        <View style={headerGlobalStyles.customHeaderStyle}>
                            <AppBarBadge
                                appBarBadge={{
                                    visible: true,
                                    number: 4,
                                }}
                                children={
                                    <Image
                                        source={images.bellIcon}
                                        style={
                                            headerGlobalStyles.customHeaderIconSize
                                        }
                                    />
                                }
                            />
                            <Image
                                source={images.searchIcon}
                                style={headerGlobalStyles.customHeaderIconSize}
                            />
                            <Image
                                source={images.hamburgerIcon}
                                style={headerGlobalStyles.customHeaderIconSize}
                            />
                        </View>
                    ),
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
                    headerRight: () => (
                        <View style={headerGlobalStyles.customHeaderStyle}>
                            <Image
                                source={images.searchIcon}
                                style={headerGlobalStyles.customHeaderIconSize}
                            />
                            <Image
                                source={images.hamburgerIcon}
                                style={headerGlobalStyles.customHeaderIconSize}
                            />
                        </View>
                    ),
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
                }}
            />
        </Tabs>
    );
};

export default AuthTab;
