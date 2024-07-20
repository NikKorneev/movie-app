import { getMoviesBySearch } from "@/api/getFns";
import { useQuery } from "@tanstack/react-query";

export const useSearch = (query: string | undefined) => {
	return useQuery({
		queryKey: ["SEARCH_BY", query],
		queryFn: () => getMoviesBySearch(query!),
		enabled: !!query,
		select: (data) => {
			console.log(data);

			return data.data.results;
		},
	});
};
