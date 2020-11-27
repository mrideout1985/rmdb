import React from "react";
import { Link } from "react-router-dom";
import { Film } from "../../../../hooks/search/interface";
import { PopularResults } from "../../interfaces";
import styles from "./PopularCard.module.scss";

interface Props {
	film: PopularResults | Film;
}

const PopularMovieCard: React.FC<Props> = ({ film }) => {
	return (
		<Link to={`/mediafilm-info/${film.id}`}>
			<div className={styles.container}>
				<div className={styles.image}>
					<img
						src={
							film?.poster_path !== null
								? `https://image.tmdb.org/t/p/original${film?.poster_path}`
								: `https://place-hold.it/300x500/aaa/WHITE&text=NO-IMAGE-AVAILABLE&fontsize=20`
						}
						alt=""
					/>
				</div>
				<div className={styles.content}>
					<h2>{film.title}</h2>
					<p>{film.release_date}</p>
				</div>
			</div>
		</Link>
	);
};

export { PopularMovieCard };
