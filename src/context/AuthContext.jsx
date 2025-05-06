import React, { createContext, useContext, useEffect, useState } from "react";
import apiClient from "@utils/Api";
import LocalStorageService from "@services/LocalStorageService";
import { router, useNavigation } from "expo-router";
import { CommonActions } from "@react-navigation/native";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigation();
    const [authState, setAuthState] = useState({
        token: null,
        authenticated: null,
        profile: null,
    });
    const userLogin = (params) => {
        setIsLoading(true);
        return apiClient
            .post("userlogin", params)
            .then((response) => {
                const { token, user } = response.data;

                if (!token) {
                    console.log("No Response data");
                    setIsLoading(false);
                    return false;
                }
                const authProfile = user.profile_photo_url;
                const userProfile = authProfile.replace(
                    /ui-avatars.com/g,
                    "eu.ui-avatars.com"
                );
                setAuthState({
                    token: token,
                    authenticated: true,
                    profile: userProfile,
                });
                router.replace("/Home");
                setIsLoading(false);
                return Promise.all([
                    LocalStorageService.saveData(
                        "userToken",
                        JSON.stringify(token)
                    ),
                    LocalStorageService.saveData(
                        "userProfile",
                        JSON.stringify(userProfile)
                    ),
                    LocalStorageService.saveData(
                        "isAuthenticated",
                        JSON.stringify(true)
                    ),
                ]);
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
            })
            .finally(() => {
                setIsLoading(false);
            });
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
            });
            router.replace("/");
        });
    };
    const loadUserAuth = async () => {
        try {
            const [userToken, isAuthenticated, userProfile] = await Promise.all(
                [
                    LocalStorageService.getData("userToken"),
                    LocalStorageService.getData("isAuthenticated"),
                    LocalStorageService.getData("userProfile"),
                ]
            );

            if (userToken) {
                setAuthState({
                    token: userToken,
                    authenticated: isAuthenticated === "true",
                    profile: userProfile,
                });
            }
        } catch (error) {
            console.error("Error loading user auth:", error);
        }
    };

    useEffect(() => {
        loadUserAuth();
    }, []);

    const value = { authState, userLogin, userLogout, loadUserAuth, isLoading };
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
