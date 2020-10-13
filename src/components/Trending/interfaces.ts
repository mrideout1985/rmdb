import { Film } from "../../hooks/search/interface";

export interface TrendingMovies {
	page?: number;
	results?: Film[];
	total_pages?: number;
	total_results?: number;
}

export interface TrendingProps {
	trending: TrendingMovies;
}

export interface TrendingTv {
	page?: number;
	results?: Film[];
	total_pages?: number;
	total_results?: number;
}

export interface TrendingTvProps {
	trending: TrendingTv;
}
