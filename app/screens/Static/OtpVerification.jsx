import { View, Text, SafeAreaView, TextInput, StyleSheet } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { globalStyles } from "@styles/global.style";
import { TitleDescription } from "@components/CustomUI/";
import { YellowButton } from "@components/CustomUI";
import { colors } from "@utils/Constants";
import { useAuth } from "@context/AuthContext";
import useValidateOptQuery from "@queries/useValidateOptQuery";
import { router } from "expo-router";

const OtpVerification = () => {
    const { userLogout, authState, setAuthState } = useAuth();
    const userEmail = authState.email;
    const emailSendTo = `Enter the code from the email we sent to ${userEmail}`;
    const [otpValue, setOtpValue] = useState(["", "", "", "", "", ""]);
    const [isError, setIsError] = useState(false);
    const otpInputs = useRef([]);

    const onSubmit = () => {
        const jwtToken = authState.token;

        const otpJoined = otpValue.join("");
        if (authState.otp == otpJoined) {
            setIsError(false);
            setAuthState({
                token: jwtToken,
                authenticated: true,
                profile: null,
                profileNum: 0,
                otp: 0,
                email: userEmail,
            });
            if (router.canGoBack) {
                router.dismissAll();
            }
            router.dismissTo("/screens/Dynamic/UserProfileScreen");
        } else {
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
                    <Text className="text-customWhite mt-4 mb-10">
                        {/* Didn't get the code{" "}
                        <Text className="text-customYellow">
                            Resend (in 42 sec)
                        </Text> */}
                    </Text>
                    <YellowButton
                        title="SUBMIT CODE"
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
