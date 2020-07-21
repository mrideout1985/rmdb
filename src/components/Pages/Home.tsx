import React from "react";
import styles from "./Home.module.scss";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Film } from "../../hooks/search/interface";
import { useSearch } from "../../hooks/search/useSearch";
import { FilmImage } from "../FilmInfo/FilmImage";

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
				return (
					// <Link
					// 	onClick={toggleModal}
					// 	key={key}
					// 	to={`/film-info/${el.id}
					// `}
					// >
					<>
						<FilmImage element={el} />
					</>
					// </Link>
				);
			});
		}
	};

	return (
		<div className={styles["container"]}>
			<div
				className={
					filmResults
						? styles["container__movielist"]
						: styles["hidden"]
				}
			>
				{filmList(filmResults)}
			</div>
		</div>
	);
};

export { Home };
