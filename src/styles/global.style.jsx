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
        backgroundColor: "black",
        alignItems: "center",
    },
    playerContainer: {
        height: 300,
        width: width - 40,
    },
    player: {
        flex: 1,
    },
    text: {
        fontSize: 18,
        margin: 40,
    },
    xPadding: {
        paddingInline: 20,
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
    },
    bodyText: {
        color: colors.customGray,
        lineHeight: 22,
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
        marginLeft: 20,
    },
    filmContinueWatching: {
        aspectRatio: 194 / 126,
    },
    filmContainer: { marginBottom: 40 },
});
