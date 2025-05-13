import {
    View,
    Text,
    Button,
    ScrollView,
    Image,
    StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useAuth, authState } from "@context/AuthContext";
import { YellowButton, SafeAreaLayout } from "@components/CustomUI";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "@styles/global.style";
import { Searchbar } from "react-native-paper";
import { colors, accountData } from "@utils/Constants";
import { Entypo } from "@expo/vector-icons";

const Account = () => {
    const { userLogout, authState } = useAuth();
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <SafeAreaLayout>
            <ScrollView style={globalStyles.xPadding}>
                <View className="mb-[40] mt-[10]">
                    <Searchbar
                        placeholder="Search settings"
                        onChangeText={setSearchQuery}
                        iconColor={colors.customGray}
                        placeholderTextColor={colors.customGray}
                        style={{
                            backgroundColor: colors.customDarkGray,
                            borderRadius: 3,
                            height: 45,
                        }}
                        value={searchQuery}
                        inputStyle={{
                            color: colors.customWhite,
                            minHeight: 0,
                        }}
                        showDivider={false}
                    />
                </View>
                {accountData.map((item, index) => (
                    <View key={index}>
                        <Text
                            className="text-customYellow font-bold"
                            style={globalStyles.text}
                        >
                            {item.section}
                        </Text>
                        <Text className="text-customGray mb-4">
                            {item.subtitle}
                        </Text>

                        <View
                            style={[
                                styles.accountMenus,
                                index + 1 < accountData.length
                                    ? { marginBottom: 30 }
                                    : { marginBottom: 15 },
                            ]}
                        >
                            {item.menus.map((innerItem, innerIndex) => (
                                <View
                                    key={innerIndex}
                                    className="flex-row gap-2 items-center py-3"
                                >
                                    <Image
                                        className="w-[25] h-[25]"
                                        source={require("@images/UserDefault.png")}
                                    />
                                    <Text className="text-customWhite">
                                        {innerItem}
                                    </Text>
                                    <Entypo
                                        className="ml-auto"
                                        name="chevron-right"
                                        size={20}
                                        color="white"
                                    />
                                </View>
                            ))}
                        </View>
                    </View>
                ))}

                <View className="mb-[30]">
                    <YellowButton
                        title="SIGN OUT"
                        onPress={() => {
                            userLogout();
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaLayout>
    );
};

export default Account;

const styles = StyleSheet.create({
    accountMenus: {
        backgroundColor: "#131313",
        paddingInline: 20,
        paddingBlock: 5,
        borderRadius: 3,
    },
});
