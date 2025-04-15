import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Image, StyleSheet } from "react-native";
import { images, colors } from "@utils/Constants";
import { Appbar } from "react-native-paper";
export default () => {
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
                        tabBarIcon: ({ color }) => (
                            <FontAwesome size={28} name="home" color={color} />
                        ),
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerRight: () => (
                            <>
                                <Appbar.Action
                                    color={colors.customWhite}
                                    icon="bell"
                                    size={25}
                                    style={styles.appBarStyles}
                                    isLeading
                                />
                                <Appbar.Action
                                    color={colors.customWhite}
                                    icon="magnify"
                                    size={25}
                                    style={styles.appBarStyles}
                                    isLeading
                                />
                                <Appbar.Action
                                    color={colors.customWhite}
                                    icon="menu"
                                    size={25}
                                    style={styles.appBarStyles}
                                    isLeading
                                />
                            </>
                        ),
                    }}
                />
                <Tabs.Screen
                    name="Browse"
                    options={{
                        title: "Browse",
                        tabBarIcon: ({ color }) => (
                            <FontAwesome size={28} name="globe" color={color} />
                        ),
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerRight: () => (
                            <>
                                <Appbar.Action
                                    color={colors.customWhite}
                                    icon="magnify"
                                    size={25}
                                    style={styles.appBarStyles}
                                    isLeading
                                />
                                <Appbar.Action
                                    color={colors.customWhite}
                                    icon="menu"
                                    size={25}
                                    style={styles.appBarStyles}
                                    isLeading
                                />
                            </>
                        ),
                    }}
                />
                <Tabs.Screen
                    name="Watchlist"
                    options={{
                        title: "Watchlist",
                        tabBarIcon: ({ color }) => (
                            <FontAwesome size={28} name="cog" color={color} />
                        ),
                        headerStyle: {
                            backgroundColor: "black",
                        },
                    }}
                />
                <Tabs.Screen
                    name="Account"
                    options={{
                        title: "Account",
                        tabBarIcon: ({ color }) => (
                            <FontAwesome size={28} name="cog" color={color} />
                        ),
                        headerStyle: {
                            backgroundColor: "black",
                        },
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
});
