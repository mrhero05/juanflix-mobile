import { useQuery } from "@tanstack/react-query";
import JWPlayerService from "@services/JWPlayerService";

const useJwpTrailerQuery = (trailer_id) => {
    const defaultPropertyID =
        process.env.EXPO_PUBLIC_JWPLAYER_DEFAULT_PROPERTY_ID;
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

export default useJwpTrailerQuery;
