import React from "react";
import { Film } from "../../hooks/search/interface";
import styles from "./FilmImage.module.scss";

interface Props {
	film: Film | undefined;
}

const FilmImage: React.FC<Props> = ({ film }) => {
	const handleFilmNames = () => {
		if (film) {
			if (film?.media_type === "tv") {
				return <h3>{film.name}</h3>;
			} else {
				return <h3>{film.title}</h3>;
			}
		}
	};

	return (
		<>
			<div className={styles.container}>
				<img
					src={
						film
							? `https://image.tmdb.org/t/p/original${film.poster_path}`
							: `https://place-hold.it/300x500/aaa/WHITE&text=NO-IMAGE-AVAILABLE&fontsize=20`
					}
					alt=""
				/>

				<div className={styles.filminfo}>{handleFilmNames()}</div>
			</div>
		</>
	);
};

export { FilmImage };
