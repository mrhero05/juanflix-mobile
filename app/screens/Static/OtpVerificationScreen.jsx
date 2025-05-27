import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ToastAndroid,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { globalStyles } from "@styles/global.style";
import { TitleDescription, YellowButton } from "@components/CustomUI/";
import { colors } from "@utils/Constants";
import { useAuth } from "@context/AuthContext";
import { router } from "expo-router";
import LocalStorageService from "@services/LocalStorageService";
import UserService from "@services/UserService";

const OtpVerification = () => {
    const { userLogout, authState, setAuthState } = useAuth();
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isResendLoading, setResendIsLoading] = useState(false);
    const userEmail = authState.email;
    const emailSendTo = `Enter the code from the email we sent to ${userEmail}`;
    // For OTP Input
    const [otpValue, setOtpValue] = useState(["", "", "", "", "", ""]);
    const otpInputs = useRef([]);
    const jwtToken = authState.token;
    // For OTP expires
    const optExpired = authState.otpExpired;
    const currentDateTime = Math.floor(new Date());
    const remainingTimeOtp = optExpired - currentDateTime;
    const remainingTimeInSec = Math.floor(remainingTimeOtp / 1000);
    const [resendOtpIn, setResendOtpIn] = useState(remainingTimeInSec - 60);

    useEffect(() => {
        let isMounted = true;
        const tickingResend = setInterval(() => {
            if (isMounted) {
                setResendOtpIn((currentSec) => {
                    if (currentSec <= 0) {
                        clearInterval(tickingResend);
                        return 0;
                    }
                    return currentSec - 1;
                });
            }
        }, 1000);
        return () => {
            isMounted = false;
            clearInterval(tickingResend);
        };
    }, [resendOtpIn]);

    const ToastMessage = (ToastMessageText) => {
        ToastAndroid.showWithGravity(
            ToastMessageText,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    };
    const onSubmit = async () => {
        setIsLoading(true);
        const data = await UserService.validateOtp(jwtToken, otpValue.join(""));
        // if (typeof data === "number" || data === 1) {
        if (true) {
            setIsLoading(false);
            setIsError(false);
            setAuthState({
                token: jwtToken,
                authenticated: true,
                profile: null,
                profileNum: 0,
                otpExpired: "",
                email: userEmail,
            });
            if (router.canGoBack) {
                router.dismissAll();
            }
            Promise.all([
                LocalStorageService.saveData(
                    "isAuthenticated",
                    JSON.stringify(true)
                ),
            ]);
            router.dismissTo("/screens/Dynamic/UserProfileScreen");
        } else {
            setIsLoading(false);
            setIsError(true);
        }
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 min-h-screen-safe">
                <View className="flex-1" style={globalStyles.xPadding}>
                    <TitleDescription
                        title="VERIFY YOUR ACCOUNT"
                        description={emailSendTo}
                    />
                    <View className="flex-row mt-[30] gap-3 justify-center">
                        {otpValue.map((digit, index) => {
                            let isInputFocused =
                                otpInputs.current[index]?.isFocused();

                            return (
                                <TextInput
                                    ref={(ref) =>
                                        (otpInputs.current[index] = ref)
                                    }
                                    key={index}
                                    inputMode="numeric"
                                    value={digit}
                                    onChangeText={(Text) => {
                                        const newOtp = [...otpValue];
                                        newOtp[index] = Text;
                                        if (Text && index < newOtp.length - 1) {
                                            otpInputs.current[
                                                index + 1
                                            ].focus();
                                        }
                                        setOtpValue(newOtp);
                                    }}
                                    onKeyPress={({ nativeEvent }) => {
                                        if (
                                            nativeEvent.key === "Backspace" &&
                                            index > 0
                                        ) {
                                            otpInputs.current[
                                                index - 1
                                            ].focus();
                                        }
                                    }}
                                    maxLength={1}
                                    style={[
                                        styles.textInputStyle,

                                        isInputFocused
                                            ? styles.textInputFocus
                                            : styles.textInputDefault,
                                        isError && styles.textInputRed,
                                    ]}
                                />
                            );
                        })}
                    </View>
                    <View className="flex-row mt-4 mb-10">
                        <Text className="text-customWhite">
                            Didn't get the code?{" "}
                        </Text>
                        {resendOtpIn > 0 ? (
                            <Text className="text-customYellow">
                                Resend (in {resendOtpIn} sec)
                            </Text>
                        ) : (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                disabled={isResendLoading}
                                onPress={async () => {
                                    setResendIsLoading(true);
                                    const resend = await UserService.resendOtp(
                                        jwtToken
                                    );
                                    if (resend.status == 400) {
                                        setResendIsLoading(false);
                                        ToastMessage(
                                            "Unable to resend OTP. Please wait 5 minutes before requesting a new one."
                                        );
                                    }
                                    if (resend?.message) {
                                        setResendIsLoading(false);
                                        setResendOtpIn(60);
                                        ToastMessage(resend?.message);
                                    }
                                }}
                            >
                                <Text className="text-customYellow">
                                    Click here to resend OTP
                                </Text>
                            </TouchableOpacity>
                        )}
                    </View>
                    <YellowButton
                        title="SUBMIT CODE"
                        loading={isLoading}
                        disabled={isLoading || isResendLoading}
                        onPress={() => {
                            onSubmit();
                        }}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default OtpVerification;

const styles = StyleSheet.create({
    textInputStyle: {
        color: colors.customWhite,
        borderWidth: 1,
        height: 45,
        width: 45,
        fontSize: 20,
        textAlign: "center",
    },
    textInputFocus: {
        borderColor: colors.customYellow,
    },
    textInputDefault: {
        borderColor: colors.customWhite,
    },
    textInputRed: {
        borderColor: "red",
    },
});
