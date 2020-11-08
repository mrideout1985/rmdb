import React from "react";
import { Header } from "../../Header/Header";
import { WhatsPopular } from "../../Trending/Popular/WhatsPopular";
import styles from "../Home/Home.module.scss";
// import { TrendingMovie } from "../../Trending/Trending";
// import { TrendingActors } from "../../Trending/TrendingActors";

interface Props {
	searchTerm: string;
}

const Home: React.FC<Props> = ({ searchTerm }) => {
	return (
		<div className={styles["container"]}>
			<header className={styles["header"]}>
				<Header />
			</header>

			<div className={styles["container__popular-movies"]}>
				<WhatsPopular />
			</div>
		</div>
	);
};

export { Home };
