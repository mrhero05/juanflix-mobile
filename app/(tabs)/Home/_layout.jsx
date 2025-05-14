import { Stack } from "expo-router";
import TabStackLayout from "@navigation/TabStack";
import { images } from "@utils/Constants";
import { headerGlobalStyles } from "@styles/global.style";
import { Image, View } from "react-native";
import {
    NotificationIcon,
    HamburgerIcon,
    SearchIcon,
    BrandLogo,
} from "@navigation/HeaderIcons";

const StackLayout = () => {
    return (
        <TabStackLayout>
            <Stack.Screen
                name="index"
                options={{
                    title: "Home",
                    headerTitle: () => <BrandLogo />,
                    headerRight: () => (
                        <View style={headerGlobalStyles.customHeaderStyle}>
                            <NotificationIcon />
                            <SearchIcon />
                            <HamburgerIcon />
                        </View>
                    ),
                }}
            />
            <Stack.Screen
                name="Filminfo/[id]"
                options={{
                    title: "",
                    headerRight: () => (
                        <View style={headerGlobalStyles.customHeaderStyle}>
                            <NotificationIcon />
                            <SearchIcon />
                            <HamburgerIcon />
                        </View>
                    ),
                }}
            />
            <Stack.Screen
                name="Notifications"
                options={{
                    headerRight: () => (
                        <View style={headerGlobalStyles.customHeaderStyle}>
                            <SearchIcon />
                            <HamburgerIcon />
                        </View>
                    ),
                }}
            />
            <Stack.Screen
                name="Search"
                options={{
                    headerTitle: "",
                    headerRight: () => (
                        <View style={headerGlobalStyles.customHeaderStyle}>
                            <HamburgerIcon />
                        </View>
                    ),
                }}
            />
        </TabStackLayout>
    );
};

export default StackLayout;
