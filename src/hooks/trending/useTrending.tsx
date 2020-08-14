import Axios from "axios";
import { useEffect, useState } from "react";
import { TrendingMovies } from "../../components/Trending/interfaces";

const useTrending = () => {
	const [trending, setTrending] = useState<TrendingMovies>();

	useEffect(() => {
		Axios.get(
			`https://api.themoviedb.org/3/trending/all/day?api_key=3ed5616efe7e89437efe89ebc93290a7`
		)
			.then((res) => {
				setTrending(res.data);
			})
			.catch(() => {
				console.log("Error");
			});
		const cleanup = () => {};

		return cleanup;
	}, []);

	return trending;
};

export { useTrending };
