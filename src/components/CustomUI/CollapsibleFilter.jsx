import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { colors } from "@utils/Constants";
import { Rating } from "react-native-ratings";
// import Slider from "@react-native-community/slider";

const CollapsibleFilter = ({ title }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const iconName = `chevron-${!isCollapsed ? "up" : "down"}`;
    return (
        <View>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                    setIsCollapsed(!isCollapsed);
                }}
                style={styles.collapsibleDropdown}
            >
                <Entypo
                    name={iconName}
                    size={20}
                    color="white"
                    style={styles.icon}
                />
                <Text style={styles.textTitle}>{title}</Text>
                <Entypo
                    name={iconName}
                    size={20}
                    color="white"
                    style={{ marginLeft: "auto" }}
                />
            </TouchableOpacity>
            <View>
                <ScrollView
                    style={[
                        isCollapsed ? styles.collapsed : styles.notCollapsed,
                        styles.collapsible,
                    ]}
                >
                    <View className="mb-[10]">
                        <Text style={styles.filterTitle}>Rating:</Text>
                        <Rating
                            type="custom"
                            showRating={false}
                            startingValue={0}
                            tintColor={colors.customDarkGray}
                            ratingColor={colors.customYellow}
                            ratingBackgroundColor={colors.customMildGray}
                            readonly={false}
                            imageSize={16}
                            style={{
                                alignItems: "flex-start",
                            }}
                        />
                    </View>
                    <View className="mb-[10]">
                        <Text style={styles.filterTitle}>Release Year:</Text>
                        {/* <Slider
                            style={{ width: 200, height: 40 }}
                            minimumValue={0}
                            maximumValue={6}
                            minimumTrackTintColor="#FFFFFF"
                            maximumTrackTintColor="#000000"
                        /> */}
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default CollapsibleFilter;

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 16,
        color: colors.customWhite,
    },
    filterTitle: {
        color: colors.customWhite,
        fontWeight: "bold",
        marginBottom: 5,
    },
    icon: {
        marginRight: 10,
    },
    collapsed: {
        height: 0,
        paddingVertical: 0,
    },
    notCollapsed: {
        height: "auto",
        paddingVertical: 20,
    },
    collapsible: {
        width: "100%",
        position: "absolute",
        top: 0,
        marginTop: 5,
        backgroundColor: colors.customDarkGray,
        borderRadius: 3,
        paddingHorizontal: 20,
        zIndex: 3,
        maxHeight: 250,
    },
    collapsibleDropdown: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        height: 50,
        borderRadius: 3,
        paddingHorizontal: 12,
        backgroundColor: colors.customDarkGray,
        marginTop: 5,
    },
});
