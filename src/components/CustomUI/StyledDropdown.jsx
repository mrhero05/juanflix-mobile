import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { colors } from "@utils/Constants";

const StyledDropdown = ({ data, ...props }) => {
    return (
        <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            itemContainerStyle={styles.itemContainerStyle}
            itemTextStyle={styles.itemTextStyle}
            iconStyle={styles.iconStyle}
            containerStyle={styles.containerStyle}
            backgroundColor={styles.backgroundColor}
            activeColor={colors.customGray}
            data={data}
            maxHeight={250}
            autoScroll={false}
            labelField="label"
            valueField="value"
            {...props}
        />
    );
};

export default StyledDropdown;

const styles = StyleSheet.create({
    dropdown: {
        height: 50,
        borderRadius: 3,
        paddingHorizontal: 12,
        backgroundColor: colors.customDarkGray,
    },
    placeholderStyle: {
        fontSize: 16,
        color: colors.customWhite,
    },
    selectedTextStyle: {
        fontSize: 16,
        color: colors.customWhite,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    itemContainerStyle: {
        backgroundColor: colors.customDarkGray,
    },
    itemTextStyle: {
        color: colors.customWhite,
    },
    containerStyle: {
        marginTop: 5,
        borderWidth: 0,
        borderRadius: 3,
        overflow: "hidden",
    },
});
