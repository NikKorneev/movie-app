import {
	View,
	Text,
	TouchableOpacity,
	Dimensions,
	Pressable,
	Image,
} from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";
import { useSharedValue } from "react-native-reanimated";

type MovieListProps = {
	title: string;
	data: any[];
	extraStyles?: string;
};

const MovieList = ({ data, title, extraStyles }: MovieListProps) => {
	const { width, height } = Dimensions.get("window");

	return (
		<View className={`mb-8 space-y-4 ${extraStyles}`}>
			<View className="mx-4 flex-row justify-between items-center">
				<Text className="text-xl text-white">{title}</Text>
				<TouchableOpacity>
					<Text className="text-lg text-orange-400">See All</Text>
				</TouchableOpacity>
			</View>

			<Carousel
				loop
				style={{
					width,
					alignItems: "center",
					justifyContent: "center",
				}}
				autoPlayInterval={2000}
				data={[
					{
						movieName: "Avengers Avengers",
					},
					{ movieName: "Bor" },
					{ movieName: "Dexter" },
				]}
				width={width * 0.35}
				height={height * 0.22}
				onConfigurePanGesture={(gestureChain) =>
					gestureChain.activeOffsetX([-10, 10])
				}
				renderItem={({ item, index }) => (
					<Pressable key={index}>
						<View>
							<Image
								source={{
									uri: "https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5",
								}}
								className="rounded-3xl"
								style={{
									width: width * 0.33,
									height: height * 0.22,
								}}
							/>
						</View>
						<Text className="text-neutral-300 ml-1">
							{item.movieName.length > 14
								? item.movieName.slice(0, 14) + "..."
								: item.movieName || "something"}
						</Text>
					</Pressable>
				)}
			/>
		</View>
	);
};

export default MovieList;