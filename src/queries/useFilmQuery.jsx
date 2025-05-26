import { useQuery } from "@tanstack/react-query";
import FilmService from "@services/FilmService";

export const getAllFilms = () => {
    return useQuery({
        queryKey: ["filmData"],
        queryFn: async () => {
            return await FilmService.getFilmData();
        },
    });
};

export const getFilmInfoById = (filmId) => {
    return useQuery({
        queryKey: ["filmDataByID"],
        queryFn: async () => {
            return await FilmService.getFilmByIdData(filmId);
        },
    });
};

export const getFilmsByGenreIds = (genresId) => {
    return useQuery({
        queryKey: ["filmByGenreId", genresId],
        queryFn: async () => {
            return await FilmService.getFilmByGenres(genresId);
        },
    });
};

export const getFilmsByCategoryIds = (film_id) => {
    return useQuery({
        queryKey: ["filmCategoryData", film_id],
        queryFn: async () => {
            return await FilmService.getFilmByCategoryData(film_id);
        },
    });
};

export const getContinueWatchingFilms = () => {
    return useQuery({
        queryKey: ["filmContinueData"],
        queryFn: async () => {
            return await FilmService.getContinueWatchingData();
        },
    });
};

export const getMoreFilmsByGenreId = ({ filmData, genresIds }) => {
    return useQuery({
        queryKey: ["moreFilmData", genresIds],
        queryFn: async () => {
            return await FilmService.getFilmByGenres(genresIds);
        },
        enabled: !!filmData,
    });
};
