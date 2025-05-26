import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { globalStyles } from "@styles/global.style";
import { SafeAreaLayout, CustomButton } from "@components/CustomUI";
import { colors } from "@utils/Constants";
import { getAllFilms } from "@queries/useFilmQuery";
import { FilmWithInfo } from "@components/Films/";

const Watchlist = () => {
    const btnList = ["Movies", "Short Films", "Pay-Per-View"];
    const { data, isPending } = getAllFilms();
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
                            <FilmWithInfo
                                filmid={item.id}
                                title={item.title}
                                source={itemThumbnail}
                            />
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
