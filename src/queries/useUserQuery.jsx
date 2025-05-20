import { useQuery } from "@tanstack/react-query";
import UserService from "@services/UserService";

const useUserQuery = {
    getProfile: (jwtAuth) => {
        return useQuery({
            queryKey: ["userProfile", jwtAuth],
            queryFn: async () => {
                return await UserService.getUserProfile(jwtAuth);
            },
        });
    },
};

export default useUserQuery;
