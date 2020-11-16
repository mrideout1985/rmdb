import React from "react";
import { Link } from "react-router-dom";
import { Film } from "../../../../hooks/search/interface";
import styles from "./PopularCard.module.scss";

interface Props {
	element?: React.ReactNode;
}

const PopularCard: React.FC<Props> = ({ element }) => {
	const film = element as Film;

	return (
		<Link
			to={`/${
				film.media_type === "tv" ? "mediatv-info" : "mediafilm-info"
			}/${film.id}`}
		>
			<div className={styles.container}>
				<a href="/" className={styles.image}>
					<img
						src={
							film?.poster_path !== null
								? `https://image.tmdb.org/t/p/original${film?.poster_path}`
								: `https://place-hold.it/300x500/aaa/WHITE&text=NO-IMAGE-AVAILABLE&fontsize=20`
						}
						alt=""
					/>
				</a>
				<div className={styles.content}>
					<h2>
						{film.title}
						{film.name}
					</h2>
					<p>
						{film.release_date}
						{film.first_air_date}
					</p>
				</div>
			</div>
		</Link>
	);
};

export { PopularCard };
