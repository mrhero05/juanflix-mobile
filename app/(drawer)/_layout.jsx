import { Drawer } from "expo-router/drawer";
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from "@react-navigation/drawer";
import { Dimensions, Image, Text, View } from "react-native";
import { drawerGlobalStyles, headerGlobalStyles } from "@styles/global.style";
import { BrandLogo, HamburgerIcon } from "@navigation/HeaderIcons";
import { images, colors } from "@utils/Constants";
import { router } from "expo-router";
import { Divider } from "react-native-paper";
import { useAuth } from "@context/AuthContext";

const drawerData = [
    {
        label: "Browse",
        source: require("@images/DrawerBrowse.png"),
        route: "/Browse",
    },
    {
        label: "Continue Watching",
        source: require("@images/DrawerContinue.png"),
        route: "/screens/Dynamic/ContinueWatchingScreen",
    },
    {
        label: "About JuanFlix",
        source: require("@images/DrawerAbout.png"),
        route: "screens/Static/AboutJuanflixScreen",
    },
    {
        label: "Terms of Use",
        source: require("@images/DrawerTerm.png"),
        route: "screens/Static/TermsOfUseScreen",
    },
    {
        label: "Account",
        source: require("@images/DrawerAccount.png"),
        route: "/Account",
    },
    {
        label: "Help Center",
        source: require("@images/DrawerHelp.png"),
        route: "screens/Static/HelpCenterScreen",
    },
];

const CustomDrawerItem = ({ label, source, ...props }) => {
    return (
        <DrawerItem
            label={label}
            style={{
                height: 40,
                justifyContent: "center",
                borderRadius: 5,
            }}
            icon={() => (
                <Image
                    source={source}
                    style={[
                        headerGlobalStyles.customHeaderIconSize,
                        { marginInline: 0 },
                    ]}
                />
            )}
            labelStyle={{
                color: colors.customWhite,
                height: 30,
            }}
            activeTintColor={colors.customYellow}
            {...props}
        />
    );
};

const CustomDrawerContent = (props) => {
    const { userLogout } = useAuth();
    const { navigation } = props;
    const screenHeight = Dimensions.get("window").height;
    const desiredHeight = screenHeight - 20;
    return (
        <DrawerContentScrollView key="innerDrawer" {...props}>
            <View
                style={{
                    minHeight: desiredHeight,
                }}
            >
                <View className="p-[10] mb-[10]">
                    <BrandLogo />
                </View>
                {drawerData.map((item, index) => {
                    return (
                        <View key={`drawerkey-${index}`}>
                            <CustomDrawerItem
                                label={item.label}
                                source={item.source}
                                onPress={() => {
                                    navigation.closeDrawer();
                                    router.push(item.route);
                                }}
                            />
                            {index == 2 && <Divider className="my-5 mx-3" />}
                        </View>
                    );
                })}
                <View style={{ marginTop: "auto" }}>
                    <CustomDrawerItem
                        label="Logout"
                        source={require("@images/DrawerLogout.png")}
                        onPress={() => {
                            navigation.closeDrawer();
                            setTimeout(() => {
                                userLogout();
                            }, 500);
                        }}
                    />
                </View>
            </View>
        </DrawerContentScrollView>
    );
};

export default function LayoutDrawer() {
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
        </Drawer>
    );
}
