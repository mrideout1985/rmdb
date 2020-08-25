import Axios from "axios";
import { useEffect, useState } from "react";
import { TrendingPeople } from "../search/interface";

const usePeople = () => {
	const [people, setPeople] = useState<TrendingPeople>();

	useEffect(() => {
		Axios.get(
			`https://api.themoviedb.org/3/trending/person/day?api_key=3ed5616efe7e89437efe89ebc93290a7`
		)
			.then((res) => {
				setPeople(res.data);
			})
			.catch(() => {
				console.log("Error");
			});
		const cleanup = () => {};

		return cleanup;
	}, []);

	return people;
};

export { usePeople };
