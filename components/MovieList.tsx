import { View, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import React, { lazy } from "react";
import Carousel from "react-native-reanimated-carousel";
import { router } from "expo-router";
import { Movie } from "@/types/Movie";
import { IMAGE_URL_500 } from "@/api/getFns";
import MovieListSkeleton from "./MovieListSkeleton";
import { useMovieAnims } from "@/animation/useMovieAnims";
import Animated from "react-native-reanimated";

type MovieListProps = {
	title: string;
	data: Movie[];
	extraStyles?: string;
	hideSeeAll?: boolean;
	routeTo?: "upcoming" | "rated";
	isLoading: boolean;
};
const { width, height } = Dimensions.get("window");
const MovieList = ({
	data,
	title,
	extraStyles,
	hideSeeAll,
	isLoading,
	routeTo,
}: MovieListProps) => {
	const { movieName } = useMovieAnims();
	const onPress = (id: number) => {
		router.push(`/movie/${id}`);
	};

	return (
		<View className={`mb-8 space-y-4 ${extraStyles}`}>
			<View className="mx-4 flex-row justify-between items-center">
				<Text className="text-xl text-white">{title}</Text>
				{!hideSeeAll && (
					<TouchableOpacity
						onPress={() => router.push(`/all/${routeTo}`)}
					>
						<Text className="text-lg text-orange-400">See All</Text>
					</TouchableOpacity>
				)}
			</View>

			{isLoading ? (
				<MovieListSkeleton />
			) : (
				<Carousel
					loop
					overscrollEnabled
					style={{
						width,
						alignItems: "center",
						justifyContent: "center",
					}}
					autoPlayInterval={2000}
					data={data}
					width={width * 0.35}
					height={height * 0.25}
					// @ts-ignore:next-line
					onConfigurePanGesture={(gestureChain: any) =>
						gestureChain.activeOffsetX([-50, 50])
					}
					renderItem={({ item, index }) => (
						<TouchableOpacity
							key={item.id}
							onPress={() => onPress(item?.id)}
						>
							<Animated.View style={{ opacity: movieName }}>
								<Image
									source={{
										uri: IMAGE_URL_500 + item?.poster_path,
									}}
									className="rounded-3xl"
									style={{
										width: width * 0.33,
										height: height * 0.22,
									}}
								/>
							</Animated.View>
							<Animated.Text
								className="text-neutral-300 ml-1 text-center"
								style={{ opacity: movieName }}
							>
								{item?.title?.length > 14
									? item?.title?.slice(0, 14) + "..."
									: item?.title || "something"}
							</Animated.Text>
						</TouchableOpacity>
					)}
				/>
			)}
		</View>
	);
};

export default MovieList;
