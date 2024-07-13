import {
	View,
	Text,
	Dimensions,
	TouchableOpacity,
	Image,
	FlatList,
} from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";
import { router } from "expo-router";

const { width } = Dimensions.get("window");

const CastCard = () => {
	const personName = "Keanu Reeves";
	const charName = "John Wick";

	const onPress = () => {
		router.push(`/actor/${2}`);
	};

	return (
		<View className="my-6">
			<Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
			<Carousel
				data={[1, 2, 3, 4, 5]}
				overscrollEnabled
				style={{
					width: width,
					justifyContent: "center",
					alignItems: "center",
				}}
				width={width * 0.3}
				height={width * 0.45}
				renderItem={({ item, index }) => (
					<TouchableOpacity
						onPress={onPress}
						className="mr-4 item-center"
						key={index}
					>
						<View className="mx-auto overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
							<Image
								source={{
									uri: "https://m.media-amazon.com/images/M/MV5BNGJmMWEzOGQtMWZkNS00MGNiLTk5NGEtYzg1YzAyZTgzZTZmXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_.jpg",
								}}
								className="rounded-2xl h-24 w-20"
								resizeMode="cover"
							/>
						</View>

						<Text className="text-white text-xs mt-1 text-center">
							{charName.length > 10
								? charName.slice(0, 10) + "..."
								: charName}
						</Text>
						<Text className="text-neutral-400 text-xs mt-1 text-center">
							{charName.length > 10
								? personName.slice(0, 10) + "..."
								: personName}
						</Text>
					</TouchableOpacity>
				)}
				// @ts-ignore:next-line
				onConfigurePanGesture={(gestureChain: any) =>
					gestureChain.activeOffsetX([-50, 50])
				}
			/>
		</View>
	);
};

export default CastCard;
