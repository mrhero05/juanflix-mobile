import { View, Image, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "@styles/global.style";
import { TitleDescription, UserProfile } from "@components/CustomUI/";
import { profileData, images } from "@utils/Constants";

const UserProfileScreen = () => {
    return (
        <SafeAreaView className="flex-1 min-h-screen-safe">
            <View className="flex-1 items-center" style={globalStyles.xPadding}>
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
                    {profileData.map((item) => (
                        <UserProfile
                            key={item.id}
                            name={item.name}
                            source={item.source}
                        />
                    ))}
                    {profileData.length < 5 ? (
                        <UserProfile isAddProfile={true} />
                    ) : null}
                </View>
            </View>
        </SafeAreaView>
    );
};

export default UserProfileScreen;
