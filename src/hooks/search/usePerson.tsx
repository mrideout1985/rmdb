import Axios from "axios";
import { useEffect, useState } from "react";
import { Person } from "./interface";

const usePerson = (id: number) => {
	const [personResults, setPersonResults] = useState<Person>();

	useEffect(() => {
		Axios.get(
			`https://api.themoviedb.org/3/person/${id}?api_key=3ed5616efe7e89437efe89ebc93290a7&language=en-US`
		)
			.then((res) => {
				setPersonResults(res.data);
			})
			.catch(() => {
				console.log("Error");
			});
		const cleanup = () => {};

		return cleanup;
	}, []);

	return personResults;
};

export { usePerson };
