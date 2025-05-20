import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { router } from "expo-router";
import { colors } from "@utils/Constants";
import { useAuth } from "@context/AuthContext";

const UserProfile = ({ name, source, isAddProfile, profileId }) => {
    const addProfileImg = require("@images/AddProfile.png");
    const { authState, setAuthState } = useAuth();
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
                let authToken = authState.token;
                let authAuth = authState.authenticated;
                let authProfile = authState.profile;
                setAuthState({
                    token: authToken,
                    authenticated: authAuth,
                    profile: source,
                    profileNum: profileId,
                });

                !isAddProfile
                    ? router.replace("/Home")
                    : alert("Navigate to add profile screen");
            }}
        >
            <Image
                style={[
                    styles.profileImage,
                    isAddProfile && styles.profileImageStyled,
                ]}
                resizeMode="cover"
                source={!isAddProfile ? source : addProfileImg}
            />
            <Text
                className="text-center py-2 font-medium"
                style={{
                    color: !isAddProfile
                        ? colors.customWhite
                        : colors.customGray,
                }}
            >
                {name ?? "Add Profile"}
            </Text>
        </TouchableOpacity>
    );
};

export default UserProfile;

const styles = StyleSheet.create({
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 3,
    },
    profileImageStyled: {
        borderColor: colors.customGray,
        borderWidth: 1,
        borderStyle: "solid",
    },
});
