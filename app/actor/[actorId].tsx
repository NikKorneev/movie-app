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
import { router } from "expo-router";
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

const { width, height } = Dimensions.get("window");

const SingleActor = () => {
	const nameOpacity = useSharedValue(0);
	const imageOpacity = useSharedValue(0);
	const transform = useSharedValue(-800);
	const textOpacity = useSharedValue(0);
	const [isFav, setIsFav] = useState(false);

	useEffect(() => {
		nameOpacity.value = withDelay(
			300,
			withTiming(nameOpacity.value + 1, {
				duration: 600,
			})
		);
		imageOpacity.value = withDelay(
			100,
			withTiming(imageOpacity.value + 1, {
				duration: 600,
			})
		);
		textOpacity.value = withDelay(
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
				<TouchableOpacity onPress={() => setIsFav(!isFav)}>
					{isFav ? (
						<HeartIconSolid size="35" color="red" />
					) : (
						<HeartIcon size="35" color="white" />
					)}
				</TouchableOpacity>
			</SafeAreaView>

			<View className="mt-6">
				<Animated.View
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
						opacity: imageOpacity,
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
								uri: "https://m.media-amazon.com/images/M/MV5BNGJmMWEzOGQtMWZkNS00MGNiLTk5NGEtYzg1YzAyZTgzZTZmXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_.jpg",
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
						<Text>s</Text>
					</View>
				</Animated.View>

				<Animated.View
					style={{
						opacity: nameOpacity,
					}}
					className="mt-4"
				>
					<Text className="text-3xl text-white font-bold text-center">
						Keanu Reeves
					</Text>
					<Text className="text-base text-neutral-500 text-center">
						Toronto, Kanada
					</Text>
				</Animated.View>
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
						<Text className="text-neutral-300 text-xs">Male</Text>
					</View>
					<Divider />
					<View className=" px-2 items-center">
						<Text className="text-white font-semibold text-sm">
							Birthday
						</Text>
						<Text className="text-neutral-300 text-xs">
							1964-09-02
						</Text>
					</View>
					<Divider />
					<View className=" px-2 items-center">
						<Text className="text-white font-semibold text-sm">
							Known for
						</Text>
						<Text className="text-neutral-300 text-xs">Acting</Text>
					</View>
					<Divider />
					<View className=" px-2 items-center text-sm">
						<Text className="text-white font-semibold">
							Popularity
						</Text>
						<Text className="text-neutral-300  text-xs">64.23</Text>
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
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Facilis aut voluptatibus placeat necessitatibus
						vero beatae minus. Maxime magnam possimus quae, omnis
						officia, nemo pariatur cupiditate in facere eligendi,
						velit itaque.
					</Text>
				</Animated.View>

				<Animated.View
					style={{
						opacity: textOpacity,
					}}
				>
					<MovieList
						hideSeeAll
						data={[1, 2, 3, 4]}
						title={"Movies"}
					/>
				</Animated.View>
			</View>
		</ScrollView>
	);
};

export default SingleActor;
