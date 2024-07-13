import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	Dimensions,
	Platform,
	Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeartIcon as HeartIconSolid } from "react-native-heroicons/solid";
import { LinearGradient } from "expo-linear-gradient";
import { SearchParams } from "@/types/SearchParams";
import CastCard from "@/components/CastCard";
import MovieList from "@/components/MovieList";
import Animated, {
	useSharedValue,
	withDelay,
	withTiming,
} from "react-native-reanimated";
import { useMovieAnims } from "@/animation/useMovieAnims";

const { width, height } = Dimensions.get("window");

const SingleMovie = () => {
	const [isFav, setIsFav] = useState(false);
	const { id } = useLocalSearchParams<SearchParams>();
	const { mainOpacity, movieName, genres, releasedDate } = useMovieAnims();

	return (
		<ScrollView className={"flex-1 bg-neutral-900"}>
			<SafeAreaView
				className={
					"absolute z-20 pt-3 items-center before:px-4 w-full flex-row justify-between"
				}
			>
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
				<TouchableOpacity onPress={() => setIsFav(!isFav)}>
					{isFav ? (
						<HeartIconSolid size="35" color="red" />
					) : (
						<HeartIcon size="35" color="white" />
					)}
				</TouchableOpacity>
			</SafeAreaView>
			<Animated.View>
				<Image
					source={{
						uri: "https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5",
					}}
					className=""
					style={{
						width: width,
						height: height * 0.55,
					}}
					resizeMode="cover"
				/>
				<LinearGradient
					colors={[
						"transparent",
						"rgba(23,23,23,0.8)",
						"rgba(23,23,23,1)",
					]}
					style={{ width, height: height * 0.4 }}
					start={{
						x: 0.5,
						y: 0,
					}}
					end={{
						x: 0.5,
						y: 1,
					}}
					className="absolute bottom-0"
				/>
			</Animated.View>

			<Animated.View
				style={{ marginTop: -(height * 0.09) }}
				className="space-y-3"
			>
				<Animated.Text
					style={{
						opacity: movieName,
					}}
					className="text-white text-center text-3xl font-bold tracking-wider"
				>
					Movie Name
				</Animated.Text>
				<Animated.Text
					style={{
						opacity: releasedDate,
					}}
					className="text-neutral-400 font-semibold text-base text-center"
				>
					Released • 2020 • 170 min
				</Animated.Text>

				<Animated.View
					style={{
						opacity: genres,
					}}
					className="flex-row justify-center mx-4 space-x-2"
				>
					<Text className="text-neutral-400   font-semibold text-base text-center">
						Action •
					</Text>
					<Text className="text-neutral-400 font-semibold text-base text-center">
						Thrill •
					</Text>
					<Text className="text-neutral-400 font-semibold text-base text-center">
						Comedy
					</Text>
				</Animated.View>

				<Animated.Text
					style={{
						opacity: mainOpacity,
					}}
					className="text-neutral-400 mx-4 tracking-wide text-center"
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
					itaque, asperiores deleniti id perferendis explicabo? Lorem
					ipsum dolor sit amet consectetur adipisicing elit. Beatae
					modi adipisci consequuntur unde id nesciunt rerum ratione
					corporis tempore non.
				</Animated.Text>
			</Animated.View>

			<Animated.View
				style={{
					opacity: mainOpacity,
				}}
			>
				<CastCard />
			</Animated.View>

			<Animated.View
				style={{
					opacity: mainOpacity,
				}}
			>
				<MovieList
					hideSeeAll
					title="Similar Movies"
					data={[1, 2, 3, 4, 5]}
				/>
			</Animated.View>
		</ScrollView>
	);
};

export default SingleMovie;
