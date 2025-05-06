import { Stack } from "expo-router";
import { colors } from "@utils/Constants";
import { headerGlobalStyles } from "@styles/global.style";

export const unstable_settings = {
    initialRouteName: "index",
};

const TabStackLayout = ({ children }) => {
    return (
        <Stack
            initialRouteName="index"
            screenOptions={{
                headerStyle: headerGlobalStyles.headerDefaultStyle,
                headerTintColor: colors.customWhite,
                contentStyle: headerGlobalStyles.defaultBackground,
            }}
        >
            {children}
        </Stack>
    );
};

export default TabStackLayout;
