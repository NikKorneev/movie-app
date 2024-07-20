import {
	getMovieById,
	getMovies,
	getSimilarById,
	RATED_MOVIES,
	TRENDING_MOVIES,
	UPCOMING_MOVIES,
} from "@/api/getFns";
import { useQuery } from "@tanstack/react-query";

export const useTrendingMovies = (enabled: boolean = true) => {
	return useQuery({
		queryKey: ["TRENDING"],
		queryFn: () => getMovies(TRENDING_MOVIES),
		enabled,
		select: (data) => {
			return data.data.results;
		},
	});
};

export const useUpcomingMovies = (enabled: boolean = true, page?: number) => {
	return useQuery({
		queryKey: ["UPCOMING"],
		queryFn: () => getMovies(UPCOMING_MOVIES, page),
		enabled,
		select: (data) => {
			return data.data.results;
		},
	});
};

export const useRatedMovies = (enabled: boolean = true, page?: number) => {
	return useQuery({
		queryKey: ["RATED"],
		queryFn: () => getMovies(RATED_MOVIES, page),
		enabled,
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
