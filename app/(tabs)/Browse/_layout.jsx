import { Stack } from "expo-router";
import { headerGlobalStyles } from "@styles/global.style";
import { View } from "react-native";
import TabStackLayout from "@navigation/TabStack";
import {
    NotificationIcon,
    HamburgerIcon,
    SearchIcon,
} from "@navigation/HeaderIcons";

const StackLayout = () => {
    return (
        <TabStackLayout>
            <Stack.Screen
                name="index"
                options={{
                    title: "Browse",
                    headerRight: () => (
                        <View style={headerGlobalStyles.customHeaderStyle}>
                            {/* <SearchIcon /> */}
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
        </TabStackLayout>
    );
};

export default StackLayout;
