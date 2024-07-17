import { getActorById, getCastById, getMoviesByActorId } from "@/api/getFns";
import { useQuery } from "@tanstack/react-query";

export const useCast = (id: string | undefined) => {
	return useQuery({
		queryKey: ["CAST_BY_ID", id],
		queryFn: () => getCastById(id!),
		enabled: !!id,
		select: (data) => {
			return data.data.cast;
		},
	});
};

export const useActorById = (id: string | undefined) => {
	return useQuery({
		queryKey: ["ACTOR_BY_ID", id],
		queryFn: () => getActorById(id!),
		enabled: !!id,
		select: (data) => {
			return data.data;
		},
	});
};

export const useActorMovies = (id: string | undefined) => {
	return useQuery({
		queryKey: ["ACTOR_MOVIES", id],
		queryFn: () => getMoviesByActorId(id!),
		enabled: !!id,
		select: (data) => {
			return data.data.cast;
		},
	});
};
