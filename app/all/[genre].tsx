import SearchItem from "@/components/SearchItem";
import { useRatedMovies, useUpcomingMovies } from "@/hooks/useMovies";
import { SearchParams } from "@/types/SearchParams";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
	ActivityIndicator,
	FlatList,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";

const AllMovies = () => {
	const [page, setPage] = useState(1);
	const ref = useRef<FlatList>(null);
	const [isLoading, setIsLoading] = useState(false);
	const { genre } = useLocalSearchParams<SearchParams>();
	const {
		data: upData,
		isFetching: isUpFetching,
		refetch: refetchUpcoming,
	} = useUpcomingMovies(genre === "upcoming", page);
	const {
		data: rateData,
		isFetching: isRatedFetching,
		refetch: refetchRated,
	} = useRatedMovies(genre === "rated", page);
	const data =
		genre === "upcoming" ? upData : genre === "rated" ? rateData : [];

	useEffect(() => {
		if (genre === "upcoming") {
			refetchUpcoming();
		}
		if (genre === "rated") {
			refetchRated();
		}
		setTimeout(() => {
			setIsLoading(false);
		});
	}, [page]);

	const pageChange = (to: number) => {
		setIsLoading(true);
		setPage((state) => state + to);
		ref.current?.scrollToOffset({ animated: true, offset: 0 });
	};

	return (
		<SafeAreaView className="bg-neutral-800">
			<FlatList
				ref={ref}
				data={data}
				numColumns={2}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					paddingHorizontal: 20,
					paddingTop: 20,
					gap: 5,
				}}
				columnWrapperStyle={{
					gap: 5,
					justifyContent: "space-between",
				}}
				ListHeaderComponent={() => (
					<View className="flex-row gap-2 items-center justify-between">
						<TouchableOpacity
							onPress={() => router.back()}
							className={"rounded-xl bg-orange-400 p-1"}
						>
							<ChevronLeftIcon
								size="28"
								strokeWidth={2.5}
								color={"white"}
							/>
						</TouchableOpacity>
						{isLoading && (
							<ActivityIndicator
								className="py-3"
								size={"large"}
								color={"#fc9629"}
							/>
						)}
						<Text className="capitalize text-3xl pb-3 text-white font-bold tracking-wider">
							{genre}
						</Text>
					</View>
				)}
				ListFooterComponent={() => (
					<View className="flex-row">
						{page !== 1 && (
							<TouchableOpacity
								className="bg-orange-400 w-28 rounded-full py-2 px-3 mx-auto mb-2 disabled:opacity-25"
								disabled={isUpFetching || isRatedFetching}
								onPress={() => pageChange(-1)}
							>
								<Text className="font-semibold text-center">
									{isUpFetching || isRatedFetching
										? "Loading..."
										: "Prev"}
								</Text>
							</TouchableOpacity>
						)}
						<TouchableOpacity
							className="bg-orange-400 w-28 rounded-full py-2 px-3 mx-auto mb-2 disabled:opacity-25"
							disabled={isUpFetching || isRatedFetching}
							onPress={() => pageChange(1)}
						>
							<Text className="font-semibold text-center">
								{isUpFetching || isRatedFetching
									? "Loading..."
									: "Next"}
							</Text>
						</TouchableOpacity>
					</View>
				)}
				renderItem={({ item, index }) => (
					<SearchItem item={item} index={index} />
				)}
			/>
		</SafeAreaView>
	);
};

export default AllMovies;
