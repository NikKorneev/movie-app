import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";

const MovieCard = ({ item }: { item: any }) => {
	return (
		<TouchableWithoutFeedback>
			<Text>{item}</Text>
		</TouchableWithoutFeedback>
	);
};

export default MovieCard;
