import React from "react";
import { useLocalSearchParams } from "expo-router";

import FilmInfoScreen from "@screens/Dynamic/FilmInfoScreen";

const FilmInfo = () => {
    const filmInformations = useLocalSearchParams();
    return <FilmInfoScreen data={filmInformations} />;
};

export default FilmInfo;
