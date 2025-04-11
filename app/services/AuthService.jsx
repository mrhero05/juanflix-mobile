import apiClient from "@utils/Api";

const AuthService = {
    loginUser: async (params) => {
        // return apiClient
        //     .post("login", { params })
        //     .then((response) => response.data)
        //     .catch((error) => {
        //         throw error;
        //     });
        console.log(params);
    },
    logoutUser: async () => {
        console.log("Logout user");
    },
    isLoggedIn: () => {
        console.log("User is Logged in");
    },
};

export default AuthService;
