import FilmService from "@services/FilmService";
import { useQuery } from "@tanstack/react-query";

const useFilmByGenreQuery = (genresId) => {
    return useQuery({
        queryKey: ["filmByGenreId", genresId],
        queryFn: async () => {
            return await FilmService.getFilmByGenres(genresId);
        },
    });
};

export default useFilmByGenreQuery;
