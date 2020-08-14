import React from "react";
import styles from "./Trending.module.scss";
import { Film } from "../../hooks/search/interface";
import { useTrending } from "../../hooks/trending/useTrending";
import { FilmImage } from "../FilmInfo/FilmImage";

const TrendingMovie: React.FC = () => {
	const trend = useTrending();

	const createTrendingList = () => {
		const trendingList: Film[] = [];
		if (trend?.results !== undefined) {
			for (let i: number = 0; i < 20; i++) {
				trendingList.push(trend?.results[i]);
			}
		}
		return trendingList.map((el: Film, key) => {
			return (
				<>
					<FilmImage element={el} />
				</>
			);
		});
	};
	return (
		<>
			<div className={styles["trending"]}>{createTrendingList()}</div>
		</>
	);
};
export { TrendingMovie };
