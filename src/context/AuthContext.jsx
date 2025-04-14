import React, { createContext, useContext, useEffect, useState } from "react";
import apiClient from "@utils/Api";
import LocalStorageService from "@services/LocalStorageService";
import { router, useNavigation } from "expo-router";
import { CommonActions } from "@react-navigation/native";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const navigate = useNavigation();
    const [authState, setAuthState] = useState({
        token: null,
        authenticated: null,
    });

    const userLogin = (params) => {
        return apiClient
            .post("userlogin", params)
            .then((response) => {
                const { token, user } = response.data;
                console.log(response.data.profile_photo_url);
                if (!token) {
                    console.log("No Response data");
                    return false;
                }
                setAuthState({
                    token: token,
                    authenticated: true,
                });
                navigate.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: "index" }],
                    })
                );
                return Promise.all([
                    LocalStorageService.saveData(
                        "userToken",
                        JSON.stringify(token)
                    ),
                    LocalStorageService.saveData(
                        "isAuthenticated",
                        JSON.stringify(true)
                    ),
                ]);
            })
            .catch((error) => {
                console.log(error);
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
            });
            navigate.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: "index" }],
                })
            );
        });
    };
    const loadUserAuth = async () => {
        try {
            const [userToken, isAuthenticated] = await Promise.all([
                LocalStorageService.getData("userToken"),
                LocalStorageService.getData("isAuthenticated"),
            ]);

            if (userToken) {
                setAuthState({
                    token: userToken,
                    authenticated: isAuthenticated === "true",
                });
            }
        } catch (error) {
            console.error("Error loading user auth:", error);
        }
    };

    useEffect(() => {
        loadUserAuth();
    }, []);

    const value = { authState, userLogin, userLogout, loadUserAuth };
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
