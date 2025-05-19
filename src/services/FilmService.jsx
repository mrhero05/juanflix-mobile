import { mainApiClient, rawApiClient } from "@utils/Api";

const FilmService = {
    getFilmData: () => {
        return mainApiClient
            .get("film")
            .then((response) => response.data)
            .catch((error) => {
                console.error("Error fetching film region data:", error);
                throw error;
            });
    },
    getFilmByCategoryData: (film_id) => {
        return mainApiClient
            .get("films/category-id", { params: { ids: film_id } })
            .then((response) => response.data)
            .catch((error) => {
                console.error("Error fetching film region data:", error);
                throw error;
            });
    },
    getGenreData: () => {
        return mainApiClient
            .get("genre")
            .then((response) => response.data)
            .catch((error) => {
                console.error("Error fetching film region data:", error);
                throw error;
            });
    },
    getContinueWatchingData: () => {
        rawApiClient.defaults.baseURL =
            "https://dev002.glimsol.com/juanflixapp/filmcontinuesample.json";
        return rawApiClient
            .get()
            .then((response) => response.data)
            .catch((error) => {
                console.error("Error fetching film region data:", error);
                throw error;
            });
    },
    getMoreFilmData: (genreIds) => {
        return mainApiClient
            .get("films/genre-id", { params: { ids: genreIds } })
            .then((response) => response.data)
            .catch((error) => {
                console.error("Error fetching film region data:", error);
                throw error;
            });
    },
    getFilmByIdData: (filmId) => {
        return mainApiClient
            .get(`/film/${filmId}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.error("Error fetching film region data:", error);
                throw error;
            });
    },
};

export default FilmService;
