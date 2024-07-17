import { Movie } from "./Movie";

export type MovieFetchResults = {
	page: number;
	results: Movie[];
	totalPages: number;
	totalResults: number;
};
