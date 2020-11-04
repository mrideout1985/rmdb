import React from "react";
import styles from "./Trending.module.scss";
import { TrendingPeopleResults } from "../../hooks/search/interface";
import { usePeople } from "../../hooks/trending/usePeople";

const TrendingActors: React.FC = () => {
	const people = usePeople();

	const createTrendingPeopleList = () => {
		const trendingPeople: TrendingPeopleResults[] = [];

		if (people?.results !== undefined) {
			for (let i: number = 0; i < 20; i++) {
				trendingPeople.push(people?.results[i]);
			}
		}
		return trendingPeople.map((el: TrendingPeopleResults, key) => {
			return <>a</>;
		});
	};

	return (
		<>
			<div className={styles["trending"]}>
				{createTrendingPeopleList()}
			</div>
		</>
	);
};
export { TrendingActors };
