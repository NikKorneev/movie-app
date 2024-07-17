import React, { useEffect, useRef, useState } from "react";
import { router, Slot, Stack, usePathname } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	Dimensions,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { XMarkIcon } from "react-native-heroicons/outline";

const { width, height } = Dimensions.get("window");

const Search = () => {
	const [text, setText] = useState("");
	const path = usePathname();
	const ref = useRef<TextInput | null>(null);

	const handleOnPress = () => {
		if (!text) return;

		// router.replace(`search/${text}`);
		router.setParams({ searchId: text });
	};

	useEffect(() => {
		ref.current?.focus();
	}, []);

	return (
		<SafeAreaView className="bg-neutral-800 flex-1 pt-3">
			<View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full">
				<TextInput
					ref={ref}
					placeholder="Search Movie"
					onChangeText={(e) => setText(e)}
					value={text}
					returnKeyLabel="search"
					returnKeyType="search"
					onSubmitEditing={handleOnPress}
					placeholderTextColor={"lightgray"}
					className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider"
				/>
				<TouchableOpacity
					onPress={() => router.replace("/")}
					className="rounded-full p-3 m-1 bg-neutral-500"
				>
					<XMarkIcon size="25" color="white" />
				</TouchableOpacity>
			</View>
			<Slot />
		</SafeAreaView>
	);
};

export default Search;
