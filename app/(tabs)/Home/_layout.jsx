import { Stack } from "expo-router";
import TabStackLayout from "@navigation/TabStack";
import { images } from "@utils/Constants";
import { headerGlobalStyles } from "@styles/global.style";
import { Image, View } from "react-native";
import AppBarBadge from "@components/CustomUI/AppBarBadge";

const StackLayout = () => {
    return (
        <TabStackLayout>
            <Stack.Screen
                name="index"
                options={{
                    title: "Home",
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
