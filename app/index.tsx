import {
	Platform,
	StatusBar,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	Bars3CenterLeftIcon,
	MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Trending from "@/components/Trending";
import Carousel from "react-native-reanimated-carousel";

const isIOS = Platform.OS === "ios";

export default function Index() {
	return (
		<SafeAreaView
			className={`h-full bg-neutral-800 ${isIOS ? "-mb-2" : "mb-3"} pt-3`}
		>
			{/* search bar and logo */}

			<StatusBar barStyle={"light-content"} />

			<View className="flex-row justify-between items-center mx-4">
				<Bars3CenterLeftIcon
					size="30"
					strokeWidth={2}
					color={"white"}
				/>
				<Text className="text-white font-bold text-3xl">
					<Text className="text-orange-400">M</Text>ovies
				</Text>
				<TouchableOpacity>
					<MagnifyingGlassIcon
						size="30"
						strokeWidth={2}
						color="white"
					/>
				</TouchableOpacity>
			</View>

			<Trending />
		</SafeAreaView>
	);
}
