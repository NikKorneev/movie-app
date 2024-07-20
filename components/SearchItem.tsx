import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
import { Movie } from "@/types/Movie";
import { IMAGE_URL_500 } from "@/api/getFns";

type SearchItem = {
	index: number;
	item: Movie;
};

const { height, width } = Dimensions.get("window");

const SearchItem = ({ index, item }: SearchItem) => {
	return (
		<TouchableOpacity
			key={index}
			onPress={() => router.replace(`/movie/${item.id}`)}
		>
			<View className="space-y-2 mb-4">
				<Image
					source={{
						uri: IMAGE_URL_500 + item.poster_path,
					}}
					className="rounded-3xl"
					style={{ width: width * 0.44, height: height * 0.3 }}
				/>
				<Text className="text-neutral-300 ml-1 text-center">
					{item.title.length > 18
						? item.title.slice(0, 18) + "..."
						: item.title}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default SearchItem;
