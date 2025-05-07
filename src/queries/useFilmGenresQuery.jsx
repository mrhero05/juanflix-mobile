import FilmService from "@services/FilmService";
import { useQuery } from "@tanstack/react-query";

const useFilmGenresQuery = () => {
    return useQuery({
        queryKey: ["filmGenresData"],
        queryFn: async () => {
            return await FilmService.getGenreData();
        },
    });
};

export default useFilmGenresQuery;
