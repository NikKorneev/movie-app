import { View, Text, ScrollView, Dimensions, FlatList } from "react-native";
import React from "react";
import MovieCard from "./MovieCard";
import Carousel from "react-native-reanimated-carousel";

const Trending = () => {
	const { width, height } = Dimensions.get("window");
	return (
		<View>
			<View className="mt-8">
				<Text className="text-white text-xl mx-4 mb-5">Trending</Text>
			</View>
			<Carousel
				loop
				data={[...new Array(6).keys()]}
				width={width}
				height={height * 0.4}
				snapEnabled={true}
				pagingEnabled={true}
				autoPlay={true}
				autoPlayInterval={2500}
				mode="parallax"
				// @ts-ignore:next-line
				onConfigurePanGesture={(gestureChain: any) =>
					gestureChain.activeOffsetX([-10, 10])
				}
				modeConfig={{
					parallaxScrollingScale: 0.9,
					parallaxScrollingOffset: 150,
				}}
				renderItem={({ index }) => (
					<MovieCard key={index} item={{ index }} />
				)}
			/>
		</View>
	);
};

export default Trending;
