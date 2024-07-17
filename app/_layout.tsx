import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();

export default function RootLayout() {
	const [loaded] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<QueryClientProvider client={queryClient}>
			<Stack>
				<Stack.Screen name="index" options={{ headerShown: false }} />
				<Stack.Screen
					name="movie/[id]"
					options={{
						headerShown: false,
						animation: "slide_from_right",
					}}
				/>
				<Stack.Screen
					name="actor/[actorId]"
					options={{
						headerShown: false,
						animation: "slide_from_right",
					}}
				/>
				<Stack.Screen
					name="search"
					options={{
						headerShown: false,
						animation: "fade_from_bottom",
					}}
				/>
			</Stack>
		</QueryClientProvider>
	);
}
