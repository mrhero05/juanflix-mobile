import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from "react-native";
import React, { useCallback, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { colors } from "@utils/Constants";
import { Rating } from "react-native-ratings";
// import Slider from "@react-native-community/slider";
import { AntDesign } from "@expo/vector-icons";
import RangeSlider from "rn-range-slider";
import Thumb from "@components/RangeFilterWidget/Thumb";
import Notch from "@components/RangeFilterWidget/Notch";
import RailSelected from "@components/RangeFilterWidget/RailSelected";
import Label from "@components/RangeFilterWidget/Label";
import Rail from "@components/RangeFilterWidget/Rail";
import {
    StyledDropdown,
    YellowButton,
    CustomButton,
} from "@components/CustomUI";
import { getAllGenres } from "@queries/useFilmGenresQuery";

const dropdownCountry = () => {
    return [
        { label: "Philippines", value: "PH" },
        { label: "United States", value: "US" },
        { label: "Canada", value: "CA" },
        { label: "Australia", value: "AU" },
        { label: "Germany", value: "DE" },
        { label: "France", value: "FR" },
        { label: "Japan", value: "JP" },
        { label: "India", value: "IN" },
        { label: "Brazil", value: "BR" },
        { label: "United Kingdom", value: "GB" },
    ];
};

const CollapsibleFilter = ({ title }) => {
    const [countryValue, setCountryValue] = useState([]);
    const [isCountryFocus, setIsCountryFocus] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [low, setLow] = useState(true);
    const [high, setHigh] = useState(true);
    const [duration, setDuration] = useState(true);
    const iconName = `chevron-${!isCollapsed ? "up" : "down"}`;

    const renderThumb = useCallback(() => <Thumb />, []);
    const renderRail = useCallback(() => <Rail />, []);
    const renderRailSelected = useCallback(() => <RailSelected />, []);
    const renderLabel = useCallback((value) => <Label text={value} />, []);
    const renderNotch = useCallback(() => <Notch />, []);
    const handleValueChangeRelease = useCallback((low, high) => {
        setLow(low);
        setHigh(high);
    }, []);
    const handleValueChangeDuration = useCallback((low, high) => {
        setDuration(low);
    }, []);
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
                    <View className="py-[15]">
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
                            <Text style={styles.filterTitle}>
                                Release Year:
                            </Text>
                            <RangeSlider
                                style={{ marginTop: 5 }}
                                min={1990}
                                max={2025}
                                step={1}
                                floatingLabel
                                renderThumb={renderThumb}
                                renderRail={renderRail}
                                renderRailSelected={renderRailSelected}
                                renderLabel={renderLabel}
                                renderNotch={renderNotch}
                                onValueChanged={handleValueChangeDuration}
                            />
                        </View>
                        <View className="mb-[10]">
                            <Text style={styles.filterTitle}>Duration:</Text>
                            <RangeSlider
                                style={{ marginTop: 5 }}
                                min={0}
                                max={120}
                                step={1}
                                floatingLabel
                                disableRange
                                renderThumb={renderThumb}
                                renderRail={renderRail}
                                renderRailSelected={renderRailSelected}
                                renderLabel={renderLabel}
                                renderNotch={renderNotch}
                                onValueChanged={handleValueChangeRelease}
                            />
                        </View>
                        <View className="mb-[10]">
                            <Text style={styles.filterTitle}>Country:</Text>
                            <StyledDropdown
                                dropDownType="multiSelect"
                                data={dropdownCountry()}
                                placeholder={
                                    !isCountryFocus
                                        ? "Countries"
                                        : "Choosing ..."
                                }
                                value={countryValue}
                                onFocus={() => setIsCountryFocus(true)}
                                onBlur={() => setIsCountryFocus(false)}
                                onChange={(item) => {
                                    setCountryValue(item.value);
                                }}
                                renderLeftIcon={() => (
                                    <AntDesign
                                        style={styles.icon}
                                        color={colors.customWhite}
                                        name="Safety"
                                        size={20}
                                    />
                                )}
                                renderRightIcon={() => {
                                    const iconName = `chevron-${
                                        isCountryFocus ? "up" : "down"
                                    }`;
                                    return (
                                        <Entypo
                                            name={iconName}
                                            size={20}
                                            color="white"
                                        />
                                    );
                                }}
                                style={[styles.dropdown]}
                                itemContainerStyle={styles.itemContainerStyle}
                                alwaysRenderSelectedItem={true}
                                // renderSelectedItem={(item, unSelect) => (
                                //     <TouchableOpacity
                                //         onPress={() => unSelect && unSelect(item)}
                                //     >
                                //         <View style={styles.selectedStyle}>
                                //             <Text style={styles.textSelectedStyle}>
                                //                 {item.label}
                                //             </Text>
                                //             <AntDesign
                                //                 color="black"
                                //                 name="delete"
                                //                 size={17}
                                //             />
                                //         </View>
                                //     </TouchableOpacity>
                                // )}
                            />
                        </View>
                        <View className="mt-[10] mb-[10] gap-[5]">
                            <YellowButton
                                title="Apply Filter"
                                onPress={() => {
                                    console.log("Apply Filter");
                                }}
                            />
                            <CustomButton
                                title="Remove Filter"
                                textColor={colors.customWhite}
                                buttonColor={colors.customMildGray}
                                btnStyle={{ borderWidth: 0 }}
                                onPress={() => {
                                    console.log("Remove Filter");
                                }}
                            />
                        </View>
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
        maxHeight: 360,
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
    dropdown: {
        height: 50,
        borderRadius: 3,
        paddingHorizontal: 12,
        backgroundColor: colors.customMildGray,
    },
    itemContainerStyle: {
        backgroundColor: colors.customMildGray,
    },
});
