import { rawApiClient } from "@utils/Api";

const JWPlayerService = {
    getJwplayerTrailer: (propertyId, mediaId) => {
        rawApiClient.defaults.baseURL = `https://cdn.jwplayer.com/v2/sites/${propertyId}/media/${mediaId}/playback.json`;
        return rawApiClient
            .get()
            .then((response) => response.data)
            .catch((error) => {
                console.error("Error fetching film region data:", error);
                throw error;
            });
    },
};

export default JWPlayerService;
