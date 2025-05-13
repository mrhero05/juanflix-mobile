import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { router } from "expo-router";
import { AppBarBadge } from "@components/CustomUI/";
import { images } from "@utils/Constants";
import { headerGlobalStyles } from "@styles/global.style";

export const BrandLogo = () => {
    return (
        <Image
            source={images.brandLogo}
            style={{
                width: 100,
                height: 40,
                resizeMode: "contain",
            }}
        />
    );
};
export const NotificationIcon = () => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
                router.push("/Home/Notifications");
            }}
        >
            <AppBarBadge
                appBarBadge={{
                    visible: true,
                    number: 4,
                }}
                children={
                    <Image
                        source={images.bellIcon}
                        style={headerGlobalStyles.customHeaderIconSize}
                    />
                }
            />
        </TouchableOpacity>
    );
};

export const SearchIcon = () => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
                router.navigate("/Home/Search");
            }}
        >
            <Image
                source={images.searchIcon}
                style={headerGlobalStyles.customHeaderIconSize}
            />
        </TouchableOpacity>
    );
};

export const HamburgerIcon = () => {
    return (
        <Image
            source={images.hamburgerIcon}
            style={headerGlobalStyles.customHeaderIconSize}
        />
    );
};

export default () => {};
