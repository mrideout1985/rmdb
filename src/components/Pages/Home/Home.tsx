import React from "react";
import { Header } from "../../Header/Header";
import { WhatsPopular } from "../../Trending/Popular/WhatsPopular";
import { WhatsTrending } from "../../Trending/WhatsTrending";
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

			<div className={styles["container__popular"]}>
				<WhatsPopular />
			</div>

			<div className={styles["container__trending"]}>
				<WhatsTrending />
			</div>
		</div>
	);
};

export { Home };
