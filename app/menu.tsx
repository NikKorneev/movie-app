import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { Bars3BottomRightIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";

const Menu = () => {
	return (
		<SafeAreaView className="bg-neutral-800">
			<View className="h-full w-full bg-neutral-800 space-y-2 justify-center items-center">
				<TouchableOpacity
					onPress={() => router.back()}
					className="absolute top-1 right-4"
				>
					<Bars3BottomRightIcon
						size="30"
						strokeWidth={2}
						color={"white"}
					/>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => router.replace("all/upcoming")}
				>
					<Text className="text-xl text-white">Upcoming</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => router.replace("all/rated")}>
					<Text className="text-xl text-white">Top rated</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default Menu;
