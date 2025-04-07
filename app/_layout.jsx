import { Stack } from "expo-router";
import { Image, StatusBar } from "react-native";
import { colors } from '@constants/Colors';
import { images } from '@constants/Images';

export default function RootLayout() {
	return (
		<>
			<StatusBar 
				backgroundColor={colors.customBlack} 
				barStyle="light-content"
			/>
			<Stack>
				<Stack.Screen name="index" options={{ title: 'Home' }} />
				<Stack.Screen name="screens/LeavingTheApp" options={{ headerShown: false }} />
				<Stack.Screen 
					name="screens/Signup"
					options={{ 
						headerTransparent: true,
						headerTintColor: colors.customWhite,
						headerTitle: () => (
							<Image
								source={images.brandLogo}
								style={{ marginLeft: -20, width: 100, height: 40, resizeMode: 'contain' }}
							/>
						)
					}} 
				/>
			</Stack>
		</>
	);
}
