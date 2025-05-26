import { useQuery } from "@tanstack/react-query";
import JWPlayerService from "@services/JWPlayerService";

export const getJwplayerTrailerById = (trailer_id) => {
    const defaultPropertyID = "NLLhGCSw";
    return useQuery({
        queryKey: ["jwplayerConfig", trailer_id],
        queryFn: async () => {
            return await JWPlayerService.getJwplayerTrailer(
                defaultPropertyID,
                trailer_id
            );
        },
        enabled: !!trailer_id,
        refetchOnMount: "always",
    });
};
