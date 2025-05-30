import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaLayout, Loader } from "@components/CustomUI";
import { globalStyles, width } from "@styles/global.style";
import { getAllFilms } from "@queries/useFilmQuery";
import FormatterUtils from "@utils/FormatterUtils";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { colors } from "@utils/Constants";
import { getAllGenres } from "@queries/useFilmGenresQuery";
import { StyledDropdown, CollapsibleFilter } from "@components/CustomUI";
import { EmptyList, FilmItem33Width } from "@components/Films";

const dropdownGenreList = () => {
    const { data: filmGenre, isFetching: filmGenreIsFetching } = getAllGenres();

    if (!filmGenreIsFetching) {
        const genreDatas = filmGenre.map((item) => {
            return { label: item.name, value: item.id };
        });
        return genreDatas;
    }
    return [];
};
const Browse = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [value2, setValue2] = useState(null);
    const [isFocus2, setIsFocus2] = useState(false);

    const [expanded, setExpanded] = useState(true);
    const handlePress = () => setExpanded(!expanded);

    const { data: filmGenreData, isFetching: filmGenreDataIsFetching } =
        getAllFilms();

    return (
        <SafeAreaLayout>
            <View className="mb-[30]" style={globalStyles.xPadding}>
                <StyledDropdown
                    data={dropdownGenreList()}
                    placeholder={!isFocus ? "Genres" : "..."}
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(item) => {
                        setValue(item.value);
                        setIsFocus(false);
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
                        const iconName = `chevron-${isFocus ? "up" : "down"}`;
                        return (
                            <Entypo name={iconName} size={20} color="white" />
                        );
                    }}
                />
                <CollapsibleFilter title="Filters" />
            </View>
            <FlatList
                data={filmGenreData}
                ListHeaderComponent={
                    <View style={globalStyles.xPadding}>
                        <Text
                            className="mb-[10]"
                            style={[globalStyles.sectionTitleText]}
                        >
                            Top Picks
                        </Text>
                    </View>
                }
                horizontal={false}
                numColumns={3}
                contentContainerStyle={{ gap: 10 }}
                columnWrapperStyle={{ gap: 10, paddingInline: 16 }}
                renderItem={({ item }) => {
                    let itemPoster = item?.poster ? item.poster : "";
                    const routerPath = `Browse/Filminfo/${item.id}`;
                    return (
                        <FilmItem33Width
                            routerPath={routerPath}
                            source={itemPoster}
                        />
                    );
                }}
                ListEmptyComponent={() => {
                    return (
                        <EmptyList
                            isLoading={filmGenreDataIsFetching}
                            emptyDescription="This genre doesn’t have any films yet."
                        />
                    );
                }}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaLayout>
    );
};

export default Browse;

const styles = StyleSheet.create({
    icon: {
        marginRight: 10,
    },
    collapsed: {
        height: 0,
    },
    notCollapsed: {
        height: "auto",
    },
    collapsible: {
        backgroundColor: "red",
        width: "100%",
        position: "absolute",
        top: 0,
        marginTop: 10,
    },
});
