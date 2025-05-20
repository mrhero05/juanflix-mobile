import { router, Stack } from "expo-router";
import TabStackLayout from "@navigation/TabStack";
import { Image } from "react-native";
import { useAuth } from "@context/AuthContext";
import { TouchableOpacity } from "react-native";

const StackLayout = () => {
    const { authState } = useAuth();
    return (
        <TabStackLayout>
            <Stack.Screen
                name="index"
                options={{
                    title: "Account",
                    headerRight: () => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => {
                                    router.dismissTo(
                                        "/screens/Dynamic/UserProfileScreen"
                                    );
                                }}
                            >
                                <Image
                                    className="w-[35] h-[35]"
                                    source={authState.profile}
                                />
                            </TouchableOpacity>
                        );
                    },
                }}
            />
        </TabStackLayout>
    );
};

export default StackLayout;
