import React from "react";
import { Film } from "../../hooks/search/interface";
import styles from "./FilmImage.module.scss";

interface Props {
	element: React.ReactNode;
}

const FilmImage: React.FC<Props> = ({ element }) => {
	let film = element as Film;

	return (
		<>
			<div className={styles.container}>
				<img
					src={
						film?.poster_path !== null
							? `https://image.tmdb.org/t/p/original${film?.poster_path}`
							: `https://place-hold.it/300x500/aaa/WHITE&text=NO-IMAGE-AVAILABLE&fontsize=20`
					}
					alt=""
				/>

				<div className={styles.filminfo}>
					{film.media_type === "tv" ? (
						<h3>{film.name}</h3>
					) : (
						<h3>{film.title}</h3>
					)}
				</div>
			</div>
		</>
	);
};

export { FilmImage };
