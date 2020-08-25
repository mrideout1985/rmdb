import React from "react";
import styles from "./Home.module.scss";
import { Film } from "../../hooks/search/interface";
import { useSearch } from "../../hooks/search/useSearch";
import { FilmImage } from "../FilmInfo/FilmImage";
import { TrendingMovie } from "../Trending/Trending";
import { TrendingActors } from "../Trending/TrendingActors";

interface Props {
	searchTerm: string;
}

const Home: React.FC<Props> = ({ searchTerm }) => {
	const filmResults = useSearch(searchTerm);

	const filmList = (films: Film | undefined) => {
		let filmResultsArray = [];
		if (films !== undefined) {
			if (Object.keys(films).length > 0) {
				for (let i: number = 0; i < 12; i++) {
					let entry = Object.values(films)[3];
					filmResultsArray.push(entry[i]);
				}
			}

			return filmResultsArray.map((el: Film, key) => {
				if (el === undefined) {
					return "";
				}
				return (
					<>
						<FilmImage element={el} />
					</>
				);
			});
		}
	};

	return (
		<div className={styles["container"]}>
			<header>Trending Movies</header>

			<div className={styles["container__trending"]}>
				<TrendingMovie />
			</div>

			<header>Trending People</header>

			<div className={styles["container__trending"]}>
				<TrendingActors />
			</div>

			<header
				className={filmResults ? styles["header"] : styles["hidden"]}
			>
				Search Results
			</header>

			<div className={styles["container__results"]}>
				<div
					className={
						filmResults ? styles["movielist"] : styles["hidden"]
					}
				>
					{filmList(filmResults)}
				</div>
			</div>
		</div>
	);
};

export { Home };
