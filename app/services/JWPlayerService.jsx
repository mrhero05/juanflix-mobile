import axios from "axios";

const apiClient = axios.create({
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

const JWPlayerService = {
    getJwplayerTrailer: (propertyId, mediaId) => {
        apiClient.defaults.baseURL = `https://cdn.jwplayer.com/v2/sites/${propertyId}/media/${mediaId}/playback.json`;
        return apiClient
            .get()
            .then((response) => response.data)
            .catch((error) => {
                console.error("Error fetching film region data:", error);
                throw error;
            });
    },
};

export default JWPlayerService;
