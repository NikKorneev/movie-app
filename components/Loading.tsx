import { View, Text, Dimensions } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

const { width, height } = Dimensions.get("window");
const Loading = ({ custom }: { custom?: string }) => {
	return (
		<Animated.View
			style={{ width, height }}
			className=" fixed items-center flex-row justify-center bg-neutral-800"
			exiting={FadeOut}
			entering={FadeIn}
		>
			<Progress.CircleSnail
				className={"mt-[-25%] " + custom}
				thickness={8}
				size={110}
				color={"rgb(251,146,60)"}
			/>
		</Animated.View>
	);
};

export default Loading;
