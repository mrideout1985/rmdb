import React from "react";
import styles from "../Home/Home.module.scss";
// import { TrendingMovie } from "../../Trending/Trending";
// import { TrendingActors } from "../../Trending/TrendingActors";

interface Props {
	searchTerm: string;
}

const Home: React.FC<Props> = ({ searchTerm }) => {
	return (
		<div className={styles["container"]}>
			Home Page
			{/* <header>Trending Movies</header>

		

			{/* <div className={styles["container__trending"]}>
				<TrendingTv />
			</div> */}
			{/* 
			<header>Trending People</header>

			<div className={styles["container__trending"]}>
				<TrendingActors />
			</div> */}
			{/* <header
				className={filmResults ? styles["header"] : styles["hidden"]}
			>
				Search Results
			</header> */}
			{/* <div className={styles["container__results"]}>
				<div
					className={
						filmResults ? styles["movielist"] : styles["hidden"]
					}
				>
					{filmList(filmResults)}
				</div>
			</div> */}
		</div>
	);
};

export { Home };
