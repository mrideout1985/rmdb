import Axios from "axios";
import { useEffect, useState } from "react";
import { TV } from "./interface";

const useTvDetails = (query: number | undefined) => {
	const [movResults, setMovResults] = useState<TV>();

	useEffect(() => {
		Axios.get(
			`https://api.themoviedb.org/3/tv/${query}?api_key=3ed5616efe7e89437efe89ebc93290a7`
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

export { useTvDetails };
