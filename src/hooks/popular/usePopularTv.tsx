import Axios from "axios";
import { useEffect, useState } from "react";
import { Popular } from "../../components/Trending/interfaces";

const usePopularTv = () => {
	const [state, setState] = useState<Popular>();

	useEffect(() => {
		Axios.get(
			`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
		)
			.then((res) => {
				setState(res.data);
			})
			.catch(() => {
				console.log("Error");
			});

		const cleanup = () => {};

		return cleanup;
	}, []);

	return state;
};

export { usePopularTv };
