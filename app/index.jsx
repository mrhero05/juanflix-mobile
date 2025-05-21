import React from "react";

import "@styles/global.css";

import { useAuth } from "@context/AuthContext";
import SignedOutScreen from "@screens/Static/SignedOutScreen";
import { Redirect } from "expo-router";

export default () => {
    const { authState } = useAuth();
    if (authState.authenticated === true) {
        return <Redirect href="/screens/Dynamic/UserProfileScreen" />;
    }
    return <SignedOutScreen />;
};
