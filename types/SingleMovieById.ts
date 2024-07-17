export type SingleMovieById = {
	genres: { id: number; name: string }[];
	id: string;
	overview: string;
	poster_path: string;
	release_date: string;
	runtime: number;
	status: string;
	title: string;
	vote_average: number;
};
