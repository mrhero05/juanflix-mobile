import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Image, StyleSheet, View } from "react-native";
import { images, colors } from "@utils/Constants";
import { useAuth } from "@context/AuthContext";
import AppBarBadge from "@components/CustomUI/AppBarBadge";

export default () => {
    const { authState } = useAuth();
    return (
        <>
            <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
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
                                style={styles.customIconSize}
                            />
                        ),
                        sceneStyle: styles.defaultBackground,
                        headerStyle: styles.defaultBackground,
                        tabBarStyle: styles.defaultBackground,
                        tabBarActiveTintColor: colors.customYellow,
                        headerRight: () => (
                            <View style={styles.customHeaderStyle}>
                                <AppBarBadge
                                    appBarBadge={{
                                        visible: true,
                                        number: 4,
                                    }}
                                    children={
                                        <Image
                                            source={images.bellIcon}
                                            style={styles.customHeaderIconSize}
                                        />
                                    }
                                />
                                <Image
                                    source={images.searchIcon}
                                    style={styles.customHeaderIconSize}
                                />
                                <Image
                                    source={images.hamburgerIcon}
                                    style={styles.customHeaderIconSize}
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
                                style={styles.customIconSize}
                            />
                        ),
                        headerTintColor: colors.customWhite,
                        headerStyle: styles.defaultBackground,
                        tabBarStyle: styles.defaultBackground,
                        tabBarActiveTintColor: colors.customYellow,
                        headerRight: () => (
                            <View style={styles.customHeaderStyle}>
                                <Image
                                    source={images.searchIcon}
                                    style={styles.customHeaderIconSize}
                                />
                                <Image
                                    source={images.hamburgerIcon}
                                    style={styles.customHeaderIconSize}
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
                                style={styles.customIconSize}
                            />
                        ),
                        headerTintColor: colors.customWhite,
                        headerStyle: styles.defaultBackground,
                        tabBarStyle: styles.defaultBackground,
                        tabBarActiveTintColor: colors.customYellow,
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
                        headerTintColor: colors.customWhite,
                        headerStyle: styles.defaultBackground,
                        tabBarStyle: styles.defaultBackground,
                        tabBarActiveTintColor: colors.customYellow,
                    }}
                />
            </Tabs>
        </>
    );
};
const styles = StyleSheet.create({
    appBarStyles: {
        marginLeft: -12,
    },
    defaultBackground: {
        backgroundColor: colors.customBlack,
        borderColor: colors.customBlack,
    },
    badgeStyle: {
        position: "absolute",
        top: -5,
        right: -2,
        zIndex: 1,
    },
    customHeaderIconSize: {
        width: 25,
        height: 20,
        objectFit: "contain",
    },
    customHeaderStyle: {
        gap: 15,
        flexDirection: "row",
        paddingRight: 20,
    },
    customIconSize: {
        width: 25,
        height: 25,
    },
});
