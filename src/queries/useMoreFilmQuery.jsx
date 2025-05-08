import FilmService from "@services/FilmService";
import { useQuery } from "@tanstack/react-query";

const useMoreFilmQuery = ({ filmData, genresIds }) => {
    return useQuery({
        queryKey: ["moreFilmData", genresIds],
        queryFn: async () => {
            return await FilmService.getMoreFilmData(genresIds);
        },
        enabled: !!filmData,
    });
};

export default useMoreFilmQuery;
