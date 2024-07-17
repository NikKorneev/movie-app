import { useEffect } from "react";
import { useSharedValue, withDelay, withTiming } from "react-native-reanimated";

export const useMovieAnims = () => {
	const movieName = useSharedValue(0);
	const releasedDate = useSharedValue(0);
	const genres = useSharedValue(0);
	const mainOpacity = useSharedValue(0);

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
		releasedDate.value =
			releasedDate.value === 1
				? 1
				: withDelay(
						500,
						withTiming(releasedDate.value + 1, {
							duration: 500,
						})
				  );
		genres.value =
			genres.value === 1
				? 1
				: withDelay(
						700,
						withTiming(genres.value + 1, {
							duration: 500,
						})
				  );
		mainOpacity.value =
			mainOpacity.value === 1
				? 1
				: withDelay(
						900,
						withTiming(mainOpacity.value + 1, {
							duration: 500,
						})
				  );

		let timer = setTimeout(() => {
			movieName.value = 1;
			releasedDate.value = 1;
			genres.value = 1;
			mainOpacity.value = 1;
		}, 900);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return { movieName, releasedDate, genres, mainOpacity };
};
