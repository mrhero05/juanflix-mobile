import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    Platform,
    Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "@styles/global.style";
import { TextInput } from "react-native-paper";
import { colors, images } from "@utils/Constants";
import {
    YellowButton,
    CustomButton,
    PressableLink,
    TextField,
    TitleDescription,
} from "@components/CustomUI/";
import { useAuth } from "@context/AuthContext";
import { router } from "expo-router";

const SignupScreen = () => {
    const [emailValue, onChangeEmailValue] = useState("new@gmail.com");
    const [passwordValue, onChangePasswordValue] = useState("test1234");
    const [isPasswordSecure, setIsPasswordSecure] = useState(true);
    // const registrationLink = process.env.EXPO_PUBLIC_REGISTRATION_LINK;
    const registrationLink = "https://staging.juanflix.com.ph/register";

    const { userLogin, userLogout, isLoading } = useAuth();

    return (
        <SafeAreaProvider>
            <SafeAreaView
                style={globalStyles.container}
                className="flex-1 min-h-screen-safe"
            >
                <ImageBackground
                    className="flex-1 min-h-screen-safe px-[20px]"
                    resizeMode="cover"
                    source={images.backgroundImg}
                >
                    <ScrollView>
                        <View className="flex-1 w-full pt-[50px]">
                            <TitleDescription
                                title="SIGN IN"
                                description="Log in quickly using your preferred method."
                            />
                        </View>
                        <View className="pt-[45px]">
                            <TextField
                                title="Email Address:"
                                placeholder="example@juanflix.com"
                                value={emailValue}
                                onChangeText={onChangeEmailValue}
                            />
                            <TextField
                                title="Password:"
                                secureTextEntry={isPasswordSecure}
                                value={passwordValue}
                                onChangeText={onChangePasswordValue}
                                right={
                                    <TextInput.Icon
                                        icon="eye"
                                        onPress={() => {
                                            setIsPasswordSecure(
                                                !isPasswordSecure
                                            );
                                        }}
                                    />
                                }
                            />
                            <YellowButton
                                className="mb-[15px]"
                                title="SIGN IN NOW"
                                onPress={() => {
                                    userLogin({
                                        email: emailValue,
                                        password: passwordValue,
                                    });
                                }}
                                loading={isLoading}
                            />
                            <View className="flex flex-row gap-[10] items-center justify-center pt-[10px] pb-[25px]">
                                <View className="flex-1 h-[1px] bg-customGray"></View>
                                <View>
                                    <Text style={globalStyles.bodyText}>
                                        Or
                                    </Text>
                                </View>
                                <View className="flex-1 h-[1px] bg-customGray"></View>
                            </View>
                            <CustomButton
                                className="mb-[15px]"
                                icon={({ size }) => (
                                    <Image
                                        source={require("@images/Facebook-Icon.png")}
                                        style={{
                                            width: size - 2,
                                            height: size - 2,
                                        }}
                                    />
                                )}
                                textColor={colors.customGray}
                                buttonColor={colors.customBlack}
                                title="Login with Facebook"
                                onPress={() => {}}
                            />
                            <CustomButton
                                className="mb-[15px]"
                                icon={({ size }) => (
                                    <Image
                                        source={require("@images/Google-Icon.png")}
                                        style={{
                                            width: size - 2,
                                            height: size - 2,
                                        }}
                                    />
                                )}
                                textColor={colors.customGray}
                                buttonColor={colors.customBlack}
                                title="Login with Google"
                                onPress={() => {}}
                            />
                            {Platform.OS === "ios" && (
                                <CustomButton
                                    icon={({ size }) => (
                                        <Image
                                            source={require("@images/Apple-Icon.png")}
                                            style={{
                                                width: size - 2,
                                                height: size - 2,
                                            }}
                                        />
                                    )}
                                    textColor={colors.customGray}
                                    buttonColor={colors.customBlack}
                                    title="Login with Apple ID"
                                    onPress={() => {}}
                                />
                            )}
                            <View className="flex flex-row justify-center mt-[15px]">
                                <Text className="text-customGray">
                                    Don't have an account?{" "}
                                </Text>
                                <PressableLink
                                    title="Sign Up"
                                    onPress={() =>
                                        router.push({
                                            pathname:
                                                "/screens/Static/LeavingTheAppScreen",
                                            params: {
                                                continueLink: registrationLink,
                                            },
                                        })
                                    }
                                />
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default SignupScreen;
