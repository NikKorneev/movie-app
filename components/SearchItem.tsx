import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

type SearchItem = {
	index: number;
	item: any;
};

const { height, width } = Dimensions.get("window");

const SearchItem = ({ index, item }: SearchItem) => {
	const movieName = "Stmsaddddd l dks lsd kls d";

	return (
		<TouchableOpacity
			key={index}
			onPress={() => router.replace(`/movie/${2}`)}
		>
			<View className="space-y-2 mb-4">
				<Image
					source={{
						uri: "https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5",
					}}
					className="rounded-3xl"
					style={{ width: width * 0.44, height: height * 0.3 }}
				/>
				<Text className="text-neutral-300 ml-1 text-center">
					{movieName.length > 22
						? movieName?.slice(0, 22) + "..."
						: movieName}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default SearchItem;
