import { View, Text, FlatList, Pressable } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import SearchItem from "@/components/SearchItem";
import { DocumentMagnifyingGlassIcon } from "react-native-heroicons/outline";
import Loading from "@/components/Loading";

const SearchQuery = () => {
	const data = [1, 2, 3, 4];
	const resAmount = data?.length;
	const { searchId } = useLocalSearchParams();
	const [isLoading, setisLoading] = useState(false);
	// console.log(searchId);
	if (isLoading) return <Loading custom="mt-[-100%]" />;
	return (
		<FlatList
			data={data}
			numColumns={2}
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{
				paddingHorizontal: 20,
				gap: 5,
			}}
			columnWrapperStyle={{
				gap: 5,
				justifyContent: "space-between",
			}}
			ListHeaderComponent={() => (
				<View>
					<Text className="text-white text-left font-semibold ml-1">
						{resAmount ? `Results (${resAmount})` : ""}
					</Text>
					<Text>{searchId}</Text>
				</View>
			)}
			ListEmptyComponent={
				<View className="flex-row justify-center items-center gap-2">
					<DocumentMagnifyingGlassIcon size="50" color="#eeb929" />
					<Text className="text-neutral-200 text-lg">
						Nothing was found...
					</Text>
				</View>
			}
			renderItem={({ item, index }) => (
				<SearchItem item={item} index={index} />
			)}
		/>
	);
};

export default SearchQuery;
