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

// export interface KnownFor {
//     poster_path: string | null
//     adult: boolean
//     overview: string
//     release_date: string
//     original_title: string
//     genre_ids: number[]
//     id: number
//     media_type: string
//     original_language: string
//     title: string
//     backdrop_path: string | null
//     popularity: number
//     vote_count: number
//     video: boolean
//     vote_average: number
// }


export interface PopularResults {
    poster_path: string
    adult: boolean
    id: number
    name: string
	popularity: number
	title: string;
	release_date: string
}

export interface Popular {
    page: number
    total_results: number
    total_pages: number
    results: PopularResults[]
}