import { Stack } from "expo-router";
import TabStackLayout from "@navigation/TabStack";
import { Image } from "react-native";
import { useAuth } from "@context/AuthContext";

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
                            <Image
                                className="w-[35] h-[35]"
                                source={authState.profile}
                            />
                        );
                    },
                }}
            />
        </TabStackLayout>
    );
};

export default StackLayout;
