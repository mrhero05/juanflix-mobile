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
    getGenreData: () => {
        rawApiClient.defaults.baseURL =
            process.env.EXPO_PUBLIC_API_URL_SAMPLE_FILM_CATEGORY;
        return rawApiClient
            .get()
            .then((response) => response.data)
            .catch((error) => {
                console.error("Error fetching film region data:", error);
                throw error;
            });
    },
    getContinueWatchingData: () => {
        rawApiClient.defaults.baseURL =
            process.env.EXPO_PUBLIC_API_URL_SAMPLE_FILM_CONTINUE;
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
