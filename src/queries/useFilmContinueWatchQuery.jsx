import { useQuery } from "@tanstack/react-query";
import FilmService from "@services/FilmService";

const useFilmContinueWatchQuery = () => {
    return useQuery({
        queryKey: ["filmContinueData"],
        queryFn: async () => {
            return await FilmService.getContinueWatchingData();
        },
    });
};

export default useFilmContinueWatchQuery;
