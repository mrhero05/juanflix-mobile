import { useQuery } from "@tanstack/react-query";
import FilmService from "@services/FilmService";

const useFilmByCategoryQuery = (film_id) => {
    return useQuery({
        queryKey: ["filmCategoryData", film_id],
        queryFn: async () => {
            return await FilmService.getFilmByCategoryData(film_id);
        },
    });
};

export default useFilmByCategoryQuery;
