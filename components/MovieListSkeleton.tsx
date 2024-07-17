import { View, Text, ScrollView, Dimensions } from "react-native";
import React from "react";
import MovieCardSkeleton from "./MovieCardSkeleton";
import SkeletonExpo from "moti/build/skeleton/expo";

const { width, height } = Dimensions.get("window");

const MovieListSkeleton = () => {
	return (
		<ScrollView
			contentContainerStyle={{
				justifyContent: "space-between",
				gap: 7,
				paddingTop: 15,
			}}
			horizontal
			scrollEnabled={false}
			showsHorizontalScrollIndicator={false}
		>
			<View>
				<MovieCardSkeleton
					heightH={height * 0.23}
					widthW={width * 0.35}
				/>
				<View className="mt-1">
					<SkeletonExpo
						colorMode="dark"
						radius={12}
						width={width * 0.35}
						height={20}
					/>
				</View>
			</View>
			<View>
				<MovieCardSkeleton
					heightH={height * 0.23}
					widthW={width * 0.35}
				/>
				<View className="mt-1">
					<SkeletonExpo
						colorMode="dark"
						radius={12}
						width={width * 0.35}
						height={20}
					/>
				</View>
			</View>
			<View>
				<MovieCardSkeleton
					heightH={height * 0.23}
					widthW={width * 0.35}
				/>
				<View className="mt-1">
					<SkeletonExpo
						colorMode="dark"
						radius={12}
						width={width * 0.35}
						height={20}
					/>
				</View>
			</View>
		</ScrollView>
	);
};

export default MovieListSkeleton;
