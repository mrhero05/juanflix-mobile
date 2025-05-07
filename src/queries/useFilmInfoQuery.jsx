import FilmService from "@services/FilmService";
import { useQuery } from "@tanstack/react-query";

const useFilmInfoQuery = (filmId) => {
    return useQuery({
        queryKey: ["filmDataByID"],
        queryFn: async () => {
            return await FilmService.getFilmByIdData(filmId);
        },
    });
};

export default useFilmInfoQuery;
