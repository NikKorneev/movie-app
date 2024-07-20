import {
	View,
	Text,
	Platform,
	Dimensions,
	ScrollView,
	TouchableOpacity,
	Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/outline";
import { HeartIcon as HeartIconSolid } from "react-native-heroicons/solid";
import Animated, {
	useSharedValue,
	withDelay,
	withSpring,
	withTiming,
} from "react-native-reanimated";
import Divider from "@/components/Divider";
import MovieList from "@/components/MovieList";
import Loading from "@/components/Loading";
import { useActorById, useActorMovies } from "@/hooks/useActor";
import { SearchParams } from "@/types/SearchParams";
import { IMAGE_URL_500 } from "@/api/getFns";

const { width, height } = Dimensions.get("window");

const SingleCast = () => {
	const { actorId } = useLocalSearchParams<SearchParams>();
	const { data, isLoading } = useActorById(actorId);
	const { data: actorMovies, isLoading: isMoviesLoading } =
		useActorMovies(actorId);
	const transform = useSharedValue(-800);
	const textOpacity = useSharedValue(0);
	// const [isFav, setIsFav] = useState(false);

	useEffect(() => {
		textOpacity.value =
			textOpacity.value === 1
				? 1
				: withDelay(
						1000,
						withTiming(textOpacity.value + 1, {
							duration: 1000,
						})
				  );

		transform.value =
			transform.value === 0
				? 0
				: withDelay(
						500,
						withTiming(transform.value + 800, {
							duration: 800,
						})
				  );

		const timer = setTimeout(() => {
			textOpacity.value + 1;
			transform.value + 800;
		});

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<ScrollView className="flex-1 bg-neutral-900 ">
			<SafeAreaView
				className={
					" pt-3 items-center px-4 w-full flex-row justify-between"
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
				{/* <TouchableOpacity onPress={() => setIsFav(!isFav)}>
					{isFav ? (
						<HeartIconSolid size="35" color="red" />
					) : (
						<HeartIcon size="35" color="white" />
					)}
				</TouchableOpacity> */}
			</SafeAreaView>

			{isLoading ? (
				<Loading />
			) : (
				<View className="mt-6">
					<View
						className="flex-row px-4 mx-1 relative justify-center rounded-full"
						style={{
							elevation: 2,
							shadowColor: "#353535",
							shadowOffset: {
								width: 5,
								height: 5,
							},
							shadowOpacity: 0.5,
							shadowRadius: 40.84,
						}}
					>
						<View
							style={{
								width: width * 0.74,
								height: width * 0.74,
							}}
							className="items-center rounded-full overflow-hidden border border-neutral-500"
						>
							<Image
								source={{
									uri: IMAGE_URL_500 + data?.profile_path,
								}}
								style={{
									height: height * 0.43,
									width: width * 0.74,
								}}
								resizeMode="cover"
							/>
						</View>
						<View
							style={{
								width: width * 0.74,
								height: width * 0.74,
							}}
							className=" bg-neutral-800 z-[-1] right-0 justify-center items-start  absolute rounded-full overflow-hidden "
						>
							<Text className="opacity-0">s</Text>
						</View>
					</View>

					<View className="mt-4">
						<Text className="text-3xl text-white font-bold text-center">
							{data?.name}
						</Text>
						<Text className="text-base text-neutral-500 text-center">
							{data?.place_of_birth}
						</Text>
					</View>
					<Animated.View
						style={{
							transform: [{ translateX: transform }],
						}}
						className="mx-1 p-4 rounded-full mt-6 flex-row justify-between items-center bg-neutral-700"
					>
						<View className="  px-2 items-center">
							<Text className="text-white font-semibold text-sm">
								Gender
							</Text>
							<Text className="text-neutral-300 text-xs">
								{data?.gender === 2 ? "Male" : "Female"}
							</Text>
						</View>
						<Divider />
						<View className=" px-2 items-center">
							<Text className="text-white font-semibold text-sm">
								Birthday
							</Text>
							<Text className="text-neutral-300 text-xs">
								{data?.birthday || "Unknown"}
							</Text>
						</View>
						<Divider />
						<View className=" px-2 items-center">
							<Text className="text-white font-semibold text-sm">
								Known for
							</Text>
							<Text className="text-neutral-300 text-xs">
								{data?.known_for_department || "Unknown"}
							</Text>
						</View>
						<Divider />
						<View className=" px-2 items-center text-sm">
							<Text className="text-white font-semibold">
								Popularity
							</Text>
							<Text className="text-neutral-300  text-xs">
								{data?.popularity || "Unknown"}
							</Text>
						</View>
					</Animated.View>

					<Animated.View
						style={{
							opacity: textOpacity,
						}}
						className="my-6 mx-4 space-y-2"
					>
						<Text className="text-white text-lg">Biography</Text>
						<Text className="text-neutral-400 tracking-wider">
							{data?.biography || "Nothing was found"}
						</Text>
					</Animated.View>

					{actorMovies && !isMoviesLoading ? (
						<Animated.View
							style={{
								opacity: textOpacity,
							}}
						>
							<MovieList
								hideSeeAll
								isLoading={isMoviesLoading}
								data={actorMovies}
								title={"Movies"}
							/>
						</Animated.View>
					) : null}
				</View>
			)}
		</ScrollView>
	);
};

export default SingleCast;
