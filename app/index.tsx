import {
	Platform,
	RefreshControl,
	ScrollView,
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
import { router } from "expo-router";

import {
	useRatedMovies,
	useTrendingMovies,
	useUpcomingMovies,
} from "@/hooks/useMovies";
import MovieList from "@/components/MovieList";

const isIOS = Platform.OS === "ios";

export default function Index() {
	const { isFetching: isTrendingLoading, refetch: trendingRefetch } =
		useTrendingMovies();
	const {
		data: upcomingData,
		isFetching: isUpcomingLoading,
		refetch: upcomingRefetch,
	} = useUpcomingMovies();
	const {
		data: ratedData,
		isFetching: isRatedLoading,
		refetch: ratedRefetch,
	} = useRatedMovies();

	const handleRefresh = () => {
		trendingRefetch();
		upcomingRefetch();
		ratedRefetch();
	};

	return (
		<SafeAreaView
			className={`h-full bg-neutral-800 ${isIOS ? "-mb-2" : "mb-3"} pt-3`}
		>
			{/* search bar and logo */}

			<StatusBar barStyle={"light-content"} />

			<View className="flex-row justify-between items-center mx-4">
				<TouchableOpacity onPress={() => router.push("menu")}>
					<Bars3CenterLeftIcon
						size="30"
						strokeWidth={2}
						color={"white"}
					/>
				</TouchableOpacity>
				<Text className="text-white font-bold text-3xl">
					<Text className="text-orange-400">M</Text>ovies
				</Text>
				<TouchableOpacity onPress={() => router.push("/search")}>
					<MagnifyingGlassIcon
						size="30"
						strokeWidth={2}
						color="white"
					/>
				</TouchableOpacity>
			</View>

			<ScrollView
				refreshControl={
					<RefreshControl
						refreshing={isTrendingLoading}
						onRefresh={handleRefresh}
					/>
				}
			>
				<Trending />

				<MovieList
					title="Upcoming"
					data={upcomingData || []}
					extraStyles="mt-5"
					routeTo="upcoming"
					isLoading={isUpcomingLoading}
				/>
				<MovieList
					title="Top Rated"
					data={ratedData || []}
					routeTo="rated"
					isLoading={isRatedLoading}
				/>
			</ScrollView>
		</SafeAreaView>
	);
}
