import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	Dimensions,
	Platform,
	Image,
} from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { SearchParams } from "@/types/searchParams";
import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeartIcon as HeartIconSolid } from "react-native-heroicons/solid";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");
const isIos = Platform.OS === "ios";
const topPadding = isIos ? "" : "pt-3";

const SingleMovie = () => {
	const [isFav, setIsFav] = useState(false);
	const { id } = useLocalSearchParams<SearchParams>();

	return (
		<ScrollView className={"flex-1 bg-neutral-800 "}>
			<SafeAreaView
				className={
					"absolute z-20 pt-3 items-center before:px-4 w-full flex-row justify-between"
				}
			>
				<TouchableOpacity
					onPress={() => router.back()}
					className={"rounded-xl bg-orange-400 p-1"}
				>
					<ChevronLeftIcon
						size="28"
						strokeWidth={2.5}
						color={"white"}
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setIsFav(!isFav)}>
					{isFav ? (
						<HeartIconSolid size="35" color="red" />
					) : (
						<HeartIcon size="35" color="white" />
					)}
				</TouchableOpacity>
			</SafeAreaView>
			<View>
				<Image
					source={{
						uri: "https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5",
					}}
					className=""
					style={{
						width: width,
						height: height * 0.55,
					}}
					resizeMode="cover"
				/>
				<LinearGradient
					colors={[
						"transparent",
						"rgba(23,23,23,0.8)",
						"rgba(23,23,23,1)",
					]}
					style={{ width, height: height * 0.4 }}
					start={{
						x: 0.5,
						y: 0,
					}}
					end={{
						x: 0.5,
						y: 1,
					}}
					className="absolute bottom-0"
				/>
			</View>
		</ScrollView>
	);
};

export default SingleMovie;
