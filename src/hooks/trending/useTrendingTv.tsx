import Axios from "axios";
import { useEffect, useState } from "react";
import { TrendingTv } from "../../components/Trending/interfaces";

const useTrendingTV = () => {
	const [trending, setTrending] = useState<TrendingTv>();

	useEffect(() => {
		Axios.get(
			`https://api.themoviedb.org/3/trending/tv/day?api_key=3ed5616efe7e89437efe89ebc93290a7`
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

export { useTrendingTV };
