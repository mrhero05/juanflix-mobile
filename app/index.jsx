import React from "react";

import "@styles/global.css";

import { useAuth } from "@context/AuthContext";
import SignedOutScreen from "@screens/SignedOutScreen";
import { Redirect } from "expo-router";

export default () => {
    const { authState } = useAuth();
    if (authState.authenticated) {
        console.log("redirect to home");
        return <Redirect href="/Home" />;
    }
    return <SignedOutScreen />;
};
