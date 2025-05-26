import { useQuery } from "@tanstack/react-query";
import UserService from "@services/UserService";

export const getProfileByAuth = (jwtAuth) => {
    return useQuery({
        queryKey: ["userProfile", jwtAuth],
        queryFn: async () => {
            return await UserService.getUserProfile(jwtAuth);
        },
    });
};
