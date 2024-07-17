import axios from "axios";
import API_KEY from "./apikey";
import { MovieFetchResults } from "@/types/MovieFetchResults";
import { SingleMovieById } from "@/types/SingleMovieById";
import { CastFetched } from "@/types/CastFetched";
import { SingleCast } from "@/types/SingleActor";
import { ActorMovies } from "@/types/ActorMovies";

const BASE_URL = `https://api.themoviedb.org/3/`;
export const IMAGE_URL_500 = `https://image.tmdb.org/t/p/w500`;
export const TRENDING_MOVIES = `${BASE_URL}trending/movie/day?language=en-US&api_key=${API_KEY}`;
export const UPCOMING_MOVIES = `${BASE_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
export const RATED_MOVIES = `${BASE_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

export const getMovies = (url: string) => {
	return axios.get<MovieFetchResults>(url);
};

export const getMovieById = (id: string) => {
	return axios.get<SingleMovieById>(
		BASE_URL + "movie/" + id + `?language=en-US&api_key=${API_KEY}`
	);
};

export const getSimilarById = (id: string) => {
	return axios.get<MovieFetchResults>(
		BASE_URL +
			`movie/${id}/similar?language=en-US&page=1&api_key=${API_KEY}`
	);
};

export const getCastById = (id: string) => {
	return axios.get<CastFetched>(
		BASE_URL +
			`movie/${id}/credits?language=en-US&page=1&api_key=${API_KEY}`
	);
};

export const getActorById = (id: string) => {
	return axios.get<SingleCast>(
		BASE_URL + `person/${id}?language=en-US&api_key=${API_KEY}`
	);
};

export const getMoviesByActorId = (id: string) => {
	return axios.get<ActorMovies>(
		BASE_URL +
			`person/${id}/movie_credits?language=en-US&api_key=${API_KEY}`
	);
};
