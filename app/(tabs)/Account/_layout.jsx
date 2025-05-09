import { Stack } from "expo-router";
import TabStackLayout from "@navigation/TabStack";
import { Image } from "react-native";

const StackLayout = () => {
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
                                source={require("@images/ProfileSample.png")}
                            />
                        );
                    },
                }}
            />
        </TabStackLayout>
    );
};

export default StackLayout;
