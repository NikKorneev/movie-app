import {
	View,
	Text,
	TouchableWithoutFeedback,
	Dimensions,
	Image,
	Pressable,
} from "react-native";
import React from "react";
import { router } from "expo-router";

const MovieCard = ({ item }: { item: any }) => {
	const { width, height } = Dimensions.get("window");
	const onPress = () => {
		router.push(`/movie/${2}`);
	};

	return (
		<Pressable className="mx-auto  " onPress={onPress}>
			<Image
				style={{
					width: width * 0.6,
					height: height * 0.4,
				}}
				className="rounded-3xl shadow-2xl shadow-black"
				source={{
					uri: "https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5",
				}}
			/>
		</Pressable>
	);
};

export default MovieCard;
