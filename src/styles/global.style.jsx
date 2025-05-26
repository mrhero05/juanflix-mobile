import React from "react";
import { StyleSheet, Dimensions, Platform } from "react-native";
import { colors } from "@utils/Constants";

export const { width } = Dimensions.get("window");
export const w33Percent = width * 0.33333;
export const w50Percent = width * 0.5;

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer: {
        backgroundColor: colors.customBlack,
        alignItems: "center",
    },
    playerContainer: {
        // height: 300,
        width: width,
        aspectRatio: 1.8,
    },
    player: {
        flex: 1,
    },
    text: {
        fontSize: 18,
    },
    xPadding: {
        paddingInline: 16,
    },
    yPadding: {
        paddingBlock: 20,
    },
    zPadding: {
        padding: 20,
    },
    filmAspectRatio: {
        flex: 1,
        aspectRatio: 340 / 458,
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 30,
        lineHeight: 35 * 1.2,
    },
    sectionTitleText: {
        color: colors.customWhite,
        fontSize: 18,
        fontWeight: "bold",
        lineHeight: 24,
    },
    subTitleText: {
        color: colors.customGray,
        fontSize: 15,
    },
    bodyText: {
        color: colors.customGray,
        lineHeight: 22,
        fontSize: 15,
    },
    description: {
        color: colors.customWhite,
        lineHeight: 22,
        fontSize: 15,
    },
});

export const filmGlobalStyles = StyleSheet.create({
    subtitle: {
        fontSize: 13,
        color: colors.customGray,
    },
    headerTitle: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    flatList: { marginTop: 15 },
    filmItem: {
        aspectRatio: 320 / 480,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 20,
    },
    filmCategoryItem: {
        aspectRatio: 194 / 126,
    },
    filmContinueWatching: {
        aspectRatio: 194 / 126,
    },
    filmContainer: { marginBottom: 40 },
});
export const headerGlobalStyles = StyleSheet.create({
    appBarStyles: {
        marginLeft: -12,
    },
    headerLowOpacity: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    headerDefaultStyle: {
        backgroundColor: colors.customBlack,
        borderColor: colors.customBlack,
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
    },
    customIconSize: {
        width: 25,
        height: 25,
    },
});

export const drawerGlobalStyles = StyleSheet.create({
    drawerDefaultStyle: {
        backgroundColor: colors.customBlack,
        borderColor: colors.customBlack,
        borderRadius: 0,
        width: 250,
    },
    drawerLabelStyle: { color: colors.customWhite },
    drawerItemStyle: {
        borderRadius: 3,
        backgroundColor: colors.customGray,
    },
});
