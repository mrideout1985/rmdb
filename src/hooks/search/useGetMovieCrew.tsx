import Axios from "axios";
import { useEffect, useState } from "react";
import { CrewData } from "./interface";

const useGetMovieCrew = (id: number | undefined) => {
	const [getCrew, setGetCrew] = useState<CrewData>();

	useEffect(() => {
		Axios.get(
			`https://api.themoviedb.org/3/movie/${id}/credits?api_key=3ed5616efe7e89437efe89ebc93290a7`
		)
			.then((res) => {
				setGetCrew(res.data);
			})
			.catch(() => {
				console.log("Error");
			});
		const cleanup = () => {};

		return cleanup;
	}, [id]);

	return getCrew;
};

export { useGetMovieCrew };
