import React from "react";
import { Dimensions, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MotiView } from "moti";
import SkeletonExpo from "moti/build/skeleton/expo";

const { width, height } = Dimensions.get("window");

type SkeletonProps = {
	widthW?: number;
	heightH?: number;
	customStyles?: string;
};
const MovieCardSkeleton = ({
	heightH = height * 0.4,
	customStyles,
	widthW = width * 0.6,
}: SkeletonProps) => {
	return (
		<View className={`mx-auto` + customStyles}>
			<SkeletonExpo
				colorMode="dark"
				radius={24}
				height={heightH}
				width={widthW}
			/>
		</View>
	);
};

export default MovieCardSkeleton;
