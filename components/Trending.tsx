import { View, Text, ScrollView, Dimensions, FlatList } from "react-native";
import React from "react";
import MovieCard from "./MovieCard";
import Carousel from "react-native-reanimated-carousel";

const Trending = () => {
	const width = Dimensions.get("window").width;
	return (
		<View>
			<View className="mt-8">
				<Text className="text-white text-xl mx-4 mb-5">Trending</Text>
			</View>
			<Carousel
				loop
				width={width}
				height={width / 2}
				autoPlay={true}
				data={[...new Array(6).keys()]}
				scrollAnimationDuration={1000}
				onSnapToItem={(index) => console.log("current index:", index)}
				renderItem={({ index }) => (
					<View
						style={{
							flex: 1,
							borderWidth: 1,
							justifyContent: "center",
						}}
					>
						<Text style={{ textAlign: "center", fontSize: 30 }}>
							{index}
						</Text>
					</View>
				)}
			/>
		</View>
	);
};

export default Trending;
