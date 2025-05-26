import { Drawer } from "expo-router/drawer";
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from "@react-navigation/drawer";
import { Image, Text, View } from "react-native";
import { drawerGlobalStyles, headerGlobalStyles } from "@styles/global.style";
import { BrandLogo, HamburgerIcon } from "@navigation/HeaderIcons";
import { images, colors } from "@utils/Constants";
import { router } from "expo-router";
import { Divider } from "react-native-paper";

const drawerData = [
    {
        label: "Browse",
        source: require("@images/DrawerBrowse.png"),
        route: "/Browse",
    },
    {
        label: "Continue Watching",
        source: require("@images/DrawerContinue.png"),
        route: "/Home",
    },
    {
        label: "About JuanFlix",
        source: require("@images/DrawerAbout.png"),
        route: "AboutJuanflixScreen",
    },
    {
        label: "Terms of Use",
        source: require("@images/DrawerTerm.png"),
        route: "TermsOfUseScreen",
    },
    {
        label: "Accounts",
        source: require("@images/DrawerAccount.png"),
        route: "/Account",
    },
    {
        label: "Help Center",
        source: require("@images/DrawerHelp.png"),
        route: "HelpCenterScreen",
    },
];

const CustomDrawerContent = (props) => {
    const { navigation } = props;
    return (
        <DrawerContentScrollView key="innerDrawer" {...props}>
            <View style={{ padding: 10, marginBottom: 10 }}>
                <BrandLogo />
            </View>
            {drawerData.map((item, index) => {
                return (
                    <View key={`drawerkey-${index}`}>
                        <DrawerItem
                            label={item.label}
                            style={{
                                height: 40,
                                justifyContent: "center",
                                borderRadius: 5,
                            }}
                            icon={() => (
                                <Image
                                    source={item.source}
                                    style={[
                                        headerGlobalStyles.customHeaderIconSize,
                                        { marginInline: -5 },
                                    ]}
                                />
                            )}
                            labelStyle={{
                                color: colors.customWhite,
                                height: 30,
                            }}
                            activeTintColor={colors.customYellow}
                            onPress={() => {
                                navigation.closeDrawer();
                                router.push(item.route);
                            }}
                        />
                        {index == 2 && <Divider className="my-5 mx-3" />}
                    </View>
                );
            })}
        </DrawerContentScrollView>
    );
};

export default function Layout() {
    return (
        <Drawer
            screenOptions={{
                drawerStyle: drawerGlobalStyles.drawerDefaultStyle,
                drawerPosition: "right",
                drawerStatusBarAnimation: "fade",
                swipeEnabled: false,
                drawerLabelStyle: drawerGlobalStyles.drawerLabelStyle,
                drawerItemStyle: drawerGlobalStyles.drawerItemStyle,
                sceneStyle: headerGlobalStyles.defaultBackground,
                headerStyle: headerGlobalStyles.headerDefaultStyle,
                headerTintColor: colors.customWhite,
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="(tabs)" options={{ headerShown: false }} />
            <Drawer.Screen
                name="AboutJuanflixScreen"
                options={{
                    title: "About JuanFlix",
                    headerRight: () => (
                        <View
                            style={[
                                headerGlobalStyles.customHeaderStyle,
                                { marginRight: 20 },
                            ]}
                        >
                            <HamburgerIcon />
                        </View>
                    ),
                }}
            />
            <Drawer.Screen
                name="HelpCenterScreen"
                options={{
                    title: "Help Center",
                    headerRight: () => (
                        <View
                            style={[
                                headerGlobalStyles.customHeaderStyle,
                                { marginRight: 20 },
                            ]}
                        >
                            <HamburgerIcon />
                        </View>
                    ),
                }}
            />
            <Drawer.Screen
                name="TermsOfUseScreen"
                options={{
                    title: "Terms of Use",
                    headerRight: () => (
                        <View
                            style={[
                                headerGlobalStyles.customHeaderStyle,
                                { marginRight: 20 },
                            ]}
                        >
                            <HamburgerIcon />
                        </View>
                    ),
                }}
            />
        </Drawer>
    );
}
