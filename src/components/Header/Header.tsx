import React from "react";
import { Film } from "../../hooks/search/interface";
import { useTrending } from "../../hooks/trending/useTrending";
import Search from "../Search/Search";
import styles from "./Header.module.scss";

const Header = () => {
	const backgrounds = useTrending();
	let backgroundList: Film[];

	if (backgrounds?.results) {
		backgroundList = backgrounds.results;
	}

	const selectBackgroundImage = () => {
		if (backgroundList) {
			return backgroundList[
				Math.floor(Math.random() * backgroundList.length)
			].backdrop_path;
		}
	};

	return (
		<header
			className={styles["header"]}
			style={{
				backgroundImage: `url(https://image.tmdb.org/t/p/original${selectBackgroundImage()})`,
			}}
		>
			<div className={styles["wrapper"]}>
				<h1>Welcome.</h1>
				<h2>Discover millions of movies, TV shows and people.</h2>
				<Search />
			</div>
		</header>
	);
};

export { Header };
