import * as React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { WebView } from "react-native-webview";
import { globalStyles } from "@styles/global.style";
import { SafeAreaLayout, CustomButton } from "@components/CustomUI";
import { colors } from "@utils/Constants";
import useFilmQuery from "@queries/useFilmQuery";
import FormatterUtils from "@utils/FormatterUtils";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Watchlist = () => {
    const btnList = ["Movies", "Short Films", "Pay-Per-View"];
    const { data, isPending } = useFilmQuery();
    return (
        <SafeAreaLayout>
            <View style={globalStyles.zPadding}>
                <View className="flex-row gap-3 flex-wrap mb-5">
                    {btnList.map((item) => (
                        <CustomButton
                            key={`key-${item.toLowerCase()}`}
                            title={item}
                            textColor={colors.customWhite}
                            buttonColor={colors.customDarkGray}
                            btnStyle={styles.buttonStyle}
                        />
                    ))}
                </View>
                <FlatList
                    data={data}
                    contentContainerStyle={{
                        paddingTop: 20,
                        paddingBottom: 100,
                    }}
                    renderItem={({ item }) => {
                        const itemThumbnail = item?.thumbnail
                            ? item.thumbnail
                            : "";
                        return (
                            <View className="flex-1 flex-row mb-3 items-center gap-5">
                                <Image
                                    className="rounded"
                                    height={100}
                                    style={{ aspectRatio: 480 / 320 }}
                                    source={FormatterUtils.formatImageSource(
                                        itemThumbnail,
                                        "thumbnail"
                                    )}
                                />
                                <Text className="text-customWhite flex-1">
                                    {item.title}
                                </Text>
                                <MaterialCommunityIcons
                                    className="ml-auto mr-[-10]"
                                    name="dots-vertical"
                                    size={25}
                                    color={colors.customGray}
                                />
                            </View>
                        );
                    }}
                />
            </View>
        </SafeAreaLayout>
    );
};

export default Watchlist;
const styles = StyleSheet.create({
    buttonStyle: { borderWidth: 0, paddingInline: 8 },
});
