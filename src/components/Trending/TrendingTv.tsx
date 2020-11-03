import React from "react";
import styles from "./Trending.module.scss";
import { Film } from "../../hooks/search/interface";
import { FilmImage } from "../FilmInfo/FilmImage";
import { useTrendingTV } from "../../hooks/trending/useTrendingTv";

const TrendingTv: React.FC = () => {
	const trend = useTrendingTV();

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
export { TrendingTv };
