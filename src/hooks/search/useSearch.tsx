import Axios from "axios";
import { useEffect, useState } from "react";
import { Film } from "./interface";

const useSearch = (query: string) => {
	const [movResults, setMovResults] = useState<Film>();

	useEffect(() => {
		Axios.get(
			`https://api.themoviedb.org/3/search/movie?api_key=3ed5616efe7e89437efe89ebc93290a7&language=en-US&page=1&include_adult=false&query=${query}`
		)
			.then((res) => {
				setMovResults(res.data);
			})
			.catch(() => {
				console.log("Error");
			});
		const cleanup = () => {};

		return cleanup;
	}, [query]);

	return movResults;
};

export { useSearch };
