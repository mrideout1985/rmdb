import Axios from "axios";
import { useEffect, useState } from "react";
import { Film } from "./interface";

const useFilmDetails = (query: number | undefined) => {
	const [movResults, setMovResults] = useState<Film>();

	useEffect(() => {
		Axios.get(
			`https://api.themoviedb.org/3/movie/${query}?api_key=3ed5616efe7e89437efe89ebc93290a7`
		)
			.then((res) => {
				setMovResults(res.data);
				console.log("res.data: useFilm.tsx ", res.data);
			})
			.catch(() => {
				console.log("Error");
			});
		const cleanup = () => {};

		return cleanup;
	}, [query]);

	return movResults;
};

export { useFilmDetails };
