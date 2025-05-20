import { mainApiClient, rawApiClient } from "@utils/Api";

const UserService = {
    getUserJWTAuth: (params) => {
        return mainApiClient
            .post("userlogin", params)
            .then((response) => {
                const { access_token: token } = response.data;
                if (!token) {
                    console.log("No Response data");
                    return false;
                }
                return token;
            })
            .catch((error) => {
                if (error.response) {
                    // The server responded with a status code outside the 2xx range
                    console.log("Error response:", error.response);
                    return error.response;
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log("Error request:", error.request);
                    return error.request;
                } else {
                    // Something happened in setting up the request that triggered an error
                    console.log("Error message:", error.message);
                    return error.message;
                }
            });
    },
    getUserInformation: (jwtAuth) => {
        rawApiClient.defaults.baseURL =
            "https://staging.juanflix.com.ph/api/v1/";
        rawApiClient.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${jwtAuth}`;
        return rawApiClient
            .post("auth-user-api")
            .then((response) => {
                const { user } = response.data;
                return user;
            })
            .catch((error) => {
                if (error.response) {
                    // The server responded with a status code outside the 2xx range
                    console.log("Error response:", error.response);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log("Error request:", error.request);
                } else {
                    // Something happened in setting up the request that triggered an error
                    console.log("Error message:", error.message);
                }
            });
    },
    getUserProfile: (jwtAuth) => {
        rawApiClient.defaults.baseURL =
            "https://staging.juanflix.com.ph/api/v1/";
        rawApiClient.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${jwtAuth}`;
        return rawApiClient
            .get("user-profile-api")
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                if (error.response) {
                    // The server responded with a status code outside the 2xx range
                    console.log("Error response:", error.response);
                    return error.response;
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log("Error request:", error.request);
                    return error.request;
                } else {
                    // Something happened in setting up the request that triggered an error
                    console.log("Error message:", error.message);
                    return error.message;
                }
            });
    },
};

export default UserService;
