import Axios from "axios";
import { useEffect, useState } from "react";
import { CastData } from "./interface";

const useGetMovieCast = (id: number | undefined) => {
	const [getCast, setGetCast] = useState<CastData>();

	useEffect(() => {
		Axios.get(
			`https://api.themoviedb.org/3/movie/${id}/credits?api_key=3ed5616efe7e89437efe89ebc93290a7`
		)
			.then((res) => {
				setGetCast(res.data);
			})
			.catch(() => {
				console.log("Error");
			});
		const cleanup = () => {};

		return cleanup;
	}, [id]);

	return getCast;
};

export { useGetMovieCast };
