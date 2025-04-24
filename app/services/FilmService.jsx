import axios from "axios";

const apiClient = axios.create({
    // baseURL: process.env.EXPO_PUBLIC_API_URL_SAMPLE_FILM,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

const FilmService = {
    getFilmRegionData() {
        // apiClient.defaults.baseURL =
        //     process.env.EXPO_PUBLIC_API_URL_SAMPLE_FILM;
        apiClient.defaults.baseURL = process.env.EXPO_PUBLIC_API_URL;
        apiClient.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${process.env.EXPO_PUBLIC_API_TOKEN}`;
        return apiClient
            .get("film")
            .then((response) => response.data)
            .catch((error) => {
                console.error("Error fetching film region data:", error);
                throw error;
            });
    },
    getCategoryData() {
        apiClient.defaults.baseURL =
            process.env.EXPO_PUBLIC_API_URL_SAMPLE_FILM_CATEGORY;
        return apiClient
            .get()
            .then((response) => response.data)
            .catch((error) => {
                console.error("Error fetching film region data:", error);
                throw error;
            });
    },
    getContinueWatchingData() {
        apiClient.defaults.baseURL =
            process.env.EXPO_PUBLIC_API_URL_SAMPLE_FILM_CONTINUE;
        return apiClient
            .get()
            .then((response) => response.data)
            .catch((error) => {
                console.error("Error fetching film region data:", error);
                throw error;
            });
    },
};

export default FilmService;
