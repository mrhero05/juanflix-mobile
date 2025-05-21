import { useQuery } from "@tanstack/react-query";
import UserService from "@services/UserService";

const useValidateOptQuery = {
    validateUserOtp: (jwtAuth, userOtp) => {
        return useQuery({
            queryKey: ["userOTP", jwtAuth],
            queryFn: async () => {
                return await UserService.validateOtp(jwtAuth, userOtp);
            },
        });
    },
};

export default useValidateOptQuery;
