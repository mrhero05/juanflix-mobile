import { Stack } from "expo-router";
import { colors, images } from "@utils/Constants";
import { headerGlobalStyles } from "@styles/global.style";
import { Image, TouchableOpacity, View } from "react-native";
import TabStackLayout from "@navigation/TabStack";
import { Ionicons } from "@expo/vector-icons";
import AppBarBadge from "@components/CustomUI/AppBarBadge";

const StackLayout = () => {
    return (
        <TabStackLayout>
            <Stack.Screen
                name="index"
                options={{
                    title: "Browse",
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
            <Stack.Screen
                name="Filminfo/[id]"
                options={{
                    title: "",
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
        </TabStackLayout>
    );
};

export default StackLayout;
