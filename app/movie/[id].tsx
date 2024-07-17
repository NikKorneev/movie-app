import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	Dimensions,
	ActivityIndicator,
} from "react-native";
import React, { lazy, Suspense, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeartIcon as HeartIconSolid } from "react-native-heroicons/solid";
import { LinearGradient } from "expo-linear-gradient";
import { SearchParams } from "@/types/SearchParams";
import { useMovieAnims } from "@/animation/useMovieAnims";
import { useMovieById, useSimilarMoviesById } from "@/hooks/useMovies";
import { IMAGE_URL_500 } from "@/api/getFns";
import { useCast } from "@/hooks/useActor";
import CircularProgress from "react-native-circular-progress-indicator";
import Animated from "react-native-reanimated";

const { width, height } = Dimensions.get("window");
const CastCard = lazy(() => import("@/components/CastCard"));
const MovieList = lazy(() => import("@/components/MovieList"));
const SkeletonExpo = lazy(() => import("moti/build/skeleton/expo"));

const SingleMovie = () => {
	const [isFav, setIsFav] = useState(false);
	const { id } = useLocalSearchParams<SearchParams>();
	const { data, isLoading } = useMovieById(id);
	const {
		data: castData,
		isFetching: castIsFetching,
		isError: isCastFailed,
	} = useCast(id);
	const {
		data: similarData,
		isFetching: isSimilarLoading,
		isError: isSimilarError,
	} = useSimilarMoviesById(id);
	const { movieName, releasedDate } = useMovieAnims();

	return (
		<ScrollView className={"flex-1 bg-neutral-900"}>
			<SafeAreaView
				className={
					"absolute z-20 pt-3 items-start before:px-4 w-full flex-row justify-between"
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

				<View className="items-center gap-3">
					<TouchableOpacity onPress={() => setIsFav(!isFav)}>
						{isFav ? (
							<HeartIconSolid size="35" color="red" />
						) : (
							<HeartIcon size="35" color="white" />
						)}
					</TouchableOpacity>
					{data?.vote_average && (
						<View className="bg-neutral-800 rounded-full">
							<Text>
								<CircularProgress
									value={data?.vote_average}
									radius={25}
									maxValue={10}
									initialValue={0}
									titleColor="#FFF"
									progressValueColor={"#f3b286"}
									activeStrokeWidth={6}
									activeStrokeColor={"#f38e1a"}
									duration={1000}
								/>
							</Text>
						</View>
					)}
				</View>
			</SafeAreaView>

			<Suspense>
				<View>
					<Animated.Image
						source={{
							uri: IMAGE_URL_500 + data?.poster_path,
						}}
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
			</Suspense>

			<Suspense>
				<View
					style={{ marginTop: -(height * 0.09) }}
					className="space-y-3"
				>
					{/* {isLoading ? (
						<View className="mx-auto">
							<SkeletonExpo
								colorMode="dark"
								radius={24}
								height={50}
								width={width * 0.9}
							/>
						</View>
					) : ( */}
					<Animated.Text
						style={{
							opacity: movieName,
						}}
						className="text-white text-center text-3xl font-bold tracking-wider"
					>
						{data?.title}
					</Animated.Text>
					{/* )} */}

					<Text className="text-neutral-400 font-semibold text-base text-center">
						{data?.status} •{" "}
						{new Date(
							data?.release_date || "2020-04-05"
						).getFullYear()}{" "}
						• {data?.runtime} min
					</Text>

					<View className="flex-row justify-center mx-4 flex-wrap space-x-2">
						{data?.genres?.map((item, i) => (
							<View key={item.id}>
								<Text
									key={item.id}
									className="text-neutral-400   font-semibold text-base text-center"
								>
									{item.name}{" "}
									{i !== data?.genres?.length - 1 ? "•" : ""}
								</Text>
							</View>
						))}
					</View>

					<Text className="text-neutral-400 mx-4 tracking-wide text-center">
						{data?.overview}
					</Text>
				</View>
			</Suspense>

			<Suspense
				fallback={
					<ActivityIndicator
						className="mt-5"
						size="large"
						color={"#f59133"}
					/>
				}
			>
				<View>
					<CastCard
						data={castData || []}
						isFetching={castIsFetching}
						isError={isCastFailed}
					/>
				</View>

				<View>
					{isSimilarError && !similarData ? (
						<View className="mx-4 py-10">
							<Text className="text-white text-xl">
								Similar movies not found.
							</Text>
						</View>
					) : (
						<MovieList
							hideSeeAll
							title="Similar Movies"
							isLoading={isSimilarLoading}
							data={similarData || []}
						/>
					)}
				</View>
			</Suspense>
		</ScrollView>
	);
};

export default SingleMovie;
