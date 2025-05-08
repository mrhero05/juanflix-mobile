import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "@styles/global.style";
import { TitleDescription } from "@components/CustomUI/";

const UserProfileScreen = () => {
    return (
        <SafeAreaView className="flex-1 min-h-screen-safe">
            <View
                className="flex-1 mt-[100] items-center"
                style={globalStyles.xPadding}
            >
                <TitleDescription
                    title="Who's watching today?"
                    description="Pick your profile to get started."
                />
                <View className="mt-10 flex-1 flex-row flex-wrap gap-4 justify-center">
                    <View>
                        <Image
                            style={styles.profileImage}
                            resizeMode="cover"
                            source={require("@images/ProfileSample.png")}
                        />
                    </View>
                    <View>
                        <Image
                            style={styles.profileImage}
                            resizeMode="cover"
                            source={require("@images/ProfileSample.png")}
                        />
                    </View>
                    <View>
                        <Image
                            style={styles.profileImage}
                            resizeMode="cover"
                            source={require("@images/ProfileSample.png")}
                        />
                    </View>
                    <View>
                        <Image
                            style={styles.profileImage}
                            resizeMode="cover"
                            source={require("@images/ProfileSample.png")}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
    profileImage: {
        width: 100,
        height: 100,
    },
});
