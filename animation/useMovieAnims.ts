import { useEffect } from "react";
import { useSharedValue, withDelay, withTiming } from "react-native-reanimated";

export const useMovieAnims = () => {
	const movieName = useSharedValue(0);

	useEffect(() => {
		movieName.value =
			movieName.value === 1
				? 1
				: withDelay(
						300,
						withTiming(movieName.value + 1, {
							duration: 500,
						})
				  );

		let timer = setTimeout(() => {
			movieName.value = 1;
		}, 900);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return { movieName };
};
