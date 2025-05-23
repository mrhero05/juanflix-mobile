import { View, Image, Text, ActivityIndicator } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "@styles/global.style";
import { TitleDescription, UserProfile, Loader } from "@components/CustomUI/";
import { images } from "@utils/Constants";
import { useAuth } from "@context/AuthContext";
import useUserQuery from "@queries/useUserQuery";
import FormatterUtils from "@utils/FormatterUtils";

const UserProfileScreen = () => {
    const { authState, userLogout } = useAuth();
    const {
        data: profileData,
        isPending: profileDataIsPending,
        isFetching: profileDataisFetching,
    } = useUserQuery.getProfile(authState.token);
    if (profileData?.status === 401) {
        userLogout();
    }
    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 min-h-screen-safe">
                <View
                    className="flex-1 items-center"
                    style={globalStyles.xPadding}
                >
                    <Image
                        className="mt-[50px]"
                        source={images.brandLogo}
                        style={{
                            width: 150,
                            height: 50,
                            resizeMode: "contain",
                        }}
                    />
                    <TitleDescription
                        title="Who's watching today?"
                        description="Pick your profile to get started."
                    />

                    <View className="mt-10 flex-1 flex-row flex-wrap gap-4 justify-center">
                        {profileDataIsPending ||
                        profileDataisFetching ||
                        profileData === undefined ||
                        profileData?.status ? (
                            <View className="h-[100]">
                                <Loader />
                            </View>
                        ) : (
                            profileData.map((item) => {
                                const profileSource =
                                    FormatterUtils.formatImageSource(
                                        item.profile_icons.image
                                    );
                                return (
                                    <UserProfile
                                        key={item.id}
                                        name={item.name}
                                        source={profileSource}
                                        profileId={item.id}
                                    />
                                );
                            })
                        )}
                        {/* {profileData.length < 5 ? (
                            <UserProfile isAddProfile={true} />
                        ) : null} */}
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default UserProfileScreen;
