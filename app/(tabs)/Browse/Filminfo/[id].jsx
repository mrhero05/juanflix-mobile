import React from "react";
import { useLocalSearchParams } from "expo-router";

import FilmFilmScreen from "@screens/Dynamic/FilmFilmScreen";

const FilmInfo = () => {
    const filmInformations = useLocalSearchParams();
    return <FilmFilmScreen data={filmInformations} />;
};

export default FilmInfo;
