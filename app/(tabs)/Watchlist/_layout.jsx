import { Stack } from "expo-router";
import TabStackLayout from "@navigation/TabStack";

const StackLayout = () => {
    return (
        <TabStackLayout>
            <Stack.Screen
                name="index"
                options={{
                    title: "Watchlist",
                }}
            />
        </TabStackLayout>
    );
};

export default StackLayout;
