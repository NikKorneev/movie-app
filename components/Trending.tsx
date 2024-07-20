import { View, Text, ScrollView, Dimensions, FlatList } from "react-native";
import React from "react";
import MovieCard from "./MovieCard";
import Carousel from "react-native-reanimated-carousel";
import { useTrendingMovies } from "@/hooks/useMovies";
import Loading from "./Loading";
import MovieCardSkeleton from "./MovieCardSkeleton";

const Trending = () => {
	const { width, height } = Dimensions.get("window");
	const { data, isFetching } = useTrendingMovies();

	return (
		<View>
			<View className="mt-8">
				<Text className="text-white text-xl mx-4 mb-5">Trending</Text>
			</View>

			{isFetching ? (
				<Carousel
					enabled={false}
					data={[1, 2, 3]}
					width={width}
					height={height * 0.4}
					snapEnabled={true}
					pagingEnabled={true}
					maxScrollDistancePerSwipe={2000}
					mode="parallax"
					// @ts-ignore:next-line
					onConfigurePanGesture={(gestureChain: any) =>
						gestureChain.activeOffsetX([-50, 50])
					}
					modeConfig={{
						parallaxScrollingScale: 0.9,
						parallaxScrollingOffset: 150,
					}}
					renderItem={({ index, item }) => (
						<MovieCardSkeleton key={index} />
					)}
				/>
			) : (
				<Carousel
					loop
					data={data ?? []}
					width={width}
					height={height * 0.4}
					snapEnabled={true}
					pagingEnabled={true}
					autoPlay={true}
					autoPlayInterval={2500}
					mode="parallax"
					// @ts-ignore:next-line
					onConfigurePanGesture={(gestureChain: any) =>
						gestureChain.activeOffsetX([-50, 50])
					}
					modeConfig={{
						parallaxScrollingScale: 0.9,
						parallaxScrollingOffset: 150,
					}}
					renderItem={({ index, item }) => (
						<MovieCard key={index} item={item} />
					)}
				/>
			)}
		</View>
	);
};

export default Trending;
