import {
	getMovieById,
	getMovies,
	getSimilarById,
	RATED_MOVIES,
	TRENDING_MOVIES,
	UPCOMING_MOVIES,
} from "@/api/getFns";
import { useQuery } from "@tanstack/react-query";

export const useTrendingMovies = () => {
	return useQuery({
		queryKey: ["TRENDING"],
		queryFn: () => getMovies(TRENDING_MOVIES),
		select: (data) => {
			return data.data.results;
		},
	});
};

export const useUpcomingMovies = () => {
	return useQuery({
		queryKey: ["UPCOMING"],
		queryFn: () => getMovies(UPCOMING_MOVIES),
		select: (data) => {
			return data.data.results;
		},
	});
};

export const useRatedMovies = () => {
	return useQuery({
		queryKey: ["RATED"],
		queryFn: () => getMovies(RATED_MOVIES),
		select: (data) => {
			return data.data.results;
		},
	});
};

export const useMovieById = (id: string | undefined) => {
	return useQuery({
		queryKey: ["MOVIE_BY_ID", id],
		queryFn: () => getMovieById(id!),
		enabled: !!id,
		select: (data) => {
			return data.data;
		},
	});
};

export const useSimilarMoviesById = (id: string | undefined) => {
	return useQuery({
		queryKey: ["SIMILAR_BY_ID", id],
		queryFn: () => getSimilarById(id!),
		enabled: !!id,
		select: (data) => {
			return data.data.results;
		},
	});
};
