import React, { createContext, useContext, useEffect, useState } from "react";
import { mainApiClient, rawApiClient } from "@utils/Api";
import LocalStorageService from "@services/LocalStorageService";
import { router } from "expo-router";
import UserService from "@services/UserService";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState("");
    const [authState, setAuthState] = useState({
        token: null,
        authenticated: null,
        profile: null,
        profileNum: 0,
        otpExpired: "",
        email: "",
    });
    const userLogin = async (params) => {
        setIsLoading(true);
        const userJWTAuth = await UserService.getUserJWTAuth(params);
        if (userJWTAuth?.status) {
            setIsError("Invalid Credentials!");
            setIsLoading(false);
            return false;
        }
        setIsError("");
        const userData = await UserService.getUserInformation(userJWTAuth);

        try {
            if (userData) {
                const optExpires = new Date(userData.otp_expires);
                const optExpiresMin = optExpires.getMinutes();
                const optExpiresAt = optExpires.setMinutes(optExpiresMin + 1);
                setAuthState({
                    token: userJWTAuth,
                    authenticated: false,
                    profile: null,
                    profileNum: 0,
                    otpExpired: optExpiresAt,
                    email: userData.email,
                });
                // if (router.canGoBack) {
                //     router.dismissAll();
                // }
                router.push("/screens/Static/OtpVerificationScreen");
                setIsLoading(false);
                return Promise.all([
                    LocalStorageService.saveData("userToken", userJWTAuth),
                ]);
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };
    const userLogout = () => {
        Promise.all([
            LocalStorageService.removeData("userToken"),
            LocalStorageService.removeData("isAuthenticated"),
        ]).then(() => {
            setAuthState({
                token: null,
                authenticated: false,
                profile: null,
                profileNum: 0,
                otpExpired: "",
                email: "",
            });
            router.replace("/");
        });
    };
    const loadUserAuth = async () => {
        try {
            const [userToken, isAuthenticated] = await Promise.all([
                LocalStorageService.getData("userToken"),
                LocalStorageService.getData("isAuthenticated"),
            ]);
            if (userToken && isAuthenticated === "true") {
                setAuthState({
                    token: userToken,
                    authenticated: isAuthenticated === "true",
                    profile: null,
                    profileNum: 0,
                    otpExpired: "",
                    email: "",
                });
            }
        } catch (error) {
            console.error("Error loading user auth:", error);
        }
    };

    useEffect(() => {
        loadUserAuth();
    }, []);

    const value = {
        authState,
        setAuthState,
        userLogin,
        userLogout,
        loadUserAuth,
        isError,
        isLoading,
    };
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
