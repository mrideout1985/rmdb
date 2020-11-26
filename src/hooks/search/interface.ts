export interface Results {

	results?: Results[];

}

export interface Film {

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
	media_type: string;
	name: string;


}



export interface TV  {
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
	media_type: string;
	name: string;
	first_air_date: string;
	vote_average: number;
}

export interface FilmDetails {
	adult?: boolean
	backdrop_path?: string | null
    belongs_to_collection?: null | {}
    budget?: number
    genres?: [{ id: number; name: string }]
    homepage?: string | null
    id?: number
    imdb_id?: string | null 
    original_language?: string
    original_title?: string
    overview?: string | null
    popularity?: number
    poster_path?: string | null
    release_date?: string // format Date
    revenue?: number
    runtime?: number
    status?: string 
    tagline?: string | null
	title?: string
	name?: string;
    video?: boolean
    vote_average: number
	vote_count?: number
	first_air_date?: string;
}


export interface KnownFor {
	poster_path: string | null;
	adult: boolean;
	overview: string;
	release_date: string;
	original_title: string;
	genre_ids: number[];
	id: number;
	media_type: string;
	original_language: string;
	title: string;
	backdrop_path: string | null;
	popularity: number;
	vote_count: number;
	video: boolean;
	vote_average: number;
}

export interface TrendingPeopleResults {
	adult: false;
	gender: number;
	name: string;
	id: number;
	profile_path: string;
}

export interface TrendingPeople {
	results: TrendingPeopleResults[];
}

export interface PopularPersonResults {
	profile_path: string;
	adult?: boolean;
	id: number;
	known_for?: KnownFor;
	name: string;
	popularity?: number;
}

export interface PopularPerson {
	page: number;
	total_results: number;
	total_pages: number;
	results: PopularPersonResults[];
}

export interface Person {
	birthday: string | null;
	id: number;
	name: string;
	also_known_as: string[];
	biography: string;
	profile_path: string | null;
}
export interface Cast {
	cast_id?: number;
	character?: string;
	profile_path?: string;
	id?: number;
	name: string;
}

export interface CastData {
	cast: Cast[] 
}
