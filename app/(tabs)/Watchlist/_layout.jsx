import { Stack } from "expo-router";
import TabStackLayout from "@navigation/TabStack";
import { headerGlobalStyles } from "@styles/global.style";
import { HamburgerIcon, SearchIcon } from "@navigation/HeaderIcons";
import { View } from "react-native";

const StackLayout = () => {
    return (
        <TabStackLayout>
            <Stack.Screen
                name="index"
                options={{
                    title: "Watchlist",
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
