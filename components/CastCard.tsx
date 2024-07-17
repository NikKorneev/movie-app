import {
	View,
	Text,
	Dimensions,
	TouchableOpacity,
	Image,
	ActivityIndicator,
} from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";
import { router } from "expo-router";
import { Cast } from "@/types/Cast";
import { IMAGE_URL_500 } from "@/api/getFns";
import { DocumentMagnifyingGlassIcon } from "react-native-heroicons/outline";

const { width } = Dimensions.get("window");

type CastProps = {
	data: Cast[];
	isFetching: boolean;
	isError?: boolean;
};

const CastCard = ({ data, isFetching, isError }: CastProps) => {
	const onPress = (id: string) => {
		router.push(`/actor/${id}`);
	};

	if (isFetching)
		return (
			<View className="pb-10">
				<Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
				<ActivityIndicator size="large" color={"#f59133"} />
			</View>
		);

	if (isError)
		return (
			<View className="mx-4 py-10 items-center">
				<Text className="text-lg text-white">
					couldn't find the Cast.
				</Text>
				<DocumentMagnifyingGlassIcon size="40" color="#eeb929" />
			</View>
		);

	return (
		<View className="my-6">
			<Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
			<Carousel
				data={data || []}
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
						onPress={() => onPress(item.id)}
						className="mr-4 item-center"
						key={index}
					>
						<View className="mx-auto overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
							<Image
								source={{
									uri: IMAGE_URL_500 + item?.profile_path,
								}}
								className="rounded-2xl h-24 w-20"
								resizeMode="cover"
							/>
						</View>

						<Text className="text-white text-xs mt-1 text-center">
							{item?.character?.length > 10
								? item?.character?.slice(0, 10) + "..."
								: item?.character}
						</Text>
						<Text className="text-neutral-400 text-xs mt-1 text-center">
							{item?.name?.length > 10
								? item?.name?.slice(0, 10) + "..."
								: item?.name}
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
