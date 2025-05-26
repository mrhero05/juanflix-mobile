import FilmService from "@services/FilmService";
import { useQuery } from "@tanstack/react-query";

export const getAllGenres = () => {
    return useQuery({
        queryKey: ["filmGenresData"],
        queryFn: async () => {
            return await FilmService.getGenreData();
        },
    });
};
