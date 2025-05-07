import { useQuery } from "@tanstack/react-query";
import FilmService from "@services/FilmService";

const useFilmQuery = () => {
    return useQuery({
        queryKey: ["filmData"],
        queryFn: async () => {
            return await FilmService.getFilmData();
        },
    });
};

export default useFilmQuery;
