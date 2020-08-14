export interface Results {
	backdrop_path?: string;
	id?: number;
	original_language?: string;
	original_title?: string;
	overview?: string;
	popularity?: number;
	poster_path?: string;
	release_date?: string;
	title?: string;
	genres: [{ id: number; name: string }];
	movie_id?: number;
	tagline: string;
}

export interface Film {
	page?: number;
	results?: Results[];
	genres: [{ id: number; name: string }];
	tagline: string;
	total_pages?: number;
	total_results?: number;
	id?: number;
	runtime?: number;
	vote_average?: number;
	backdrop_path?: string;
	original_language?: string;
	original_title?: string;
	overview?: string;
	popularity?: number;
	poster_path?: string;
	release_date?: string;
	title?: string;
	movie_id?: number;
}

export interface FurtherInfo {
	adult: boolean;
	backdrop_path: string | null;
	belongs_to_collection: null | {};
	budget: number;
	genres: [{ id: number; name: string }];
	homepage: string | null;
	id: number;
	imdb_id: string | null;
	original_language: string;
	original_title: string;
	overview: string | null;
	popularity: number;
	poster_path: string | null;
	release_date: string;
	revenue: number;
	runtime: number;
	status: string;
	tagline: string | null;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}
