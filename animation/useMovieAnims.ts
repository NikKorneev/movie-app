import { useEffect } from "react";
import { useSharedValue, withDelay, withTiming } from "react-native-reanimated";

export const useMovieAnims = () => {
	const movieName = useSharedValue(0);
	const releasedDate = useSharedValue(0);
	const genres = useSharedValue(0);
	const mainOpacity = useSharedValue(0);

	useEffect(() => {
		movieName.value = withDelay(
			300,
			withTiming(movieName.value + 1, {
				duration: 500,
			})
		);
		releasedDate.value = withDelay(
			500,
			withTiming(releasedDate.value + 1, {
				duration: 500,
			})
		);
		genres.value = withDelay(
			700,
			withTiming(genres.value + 1, {
				duration: 500,
			})
		);
		mainOpacity.value = withDelay(
			900,
			withTiming(mainOpacity.value + 1, {
				duration: 500,
			})
		);
	}, []);

	return { movieName, releasedDate, genres, mainOpacity };
};
