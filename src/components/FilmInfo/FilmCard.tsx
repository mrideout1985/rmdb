import React from "react";
import styles from "./FilmCard.module.scss";
import { Film } from "../../hooks/search/interface";
import { useFilmDetails } from "../../hooks/search/useFilmDetails";

interface FilmCardProps {
	films: Film;
	onClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const FilmCard: React.FC<FilmCardProps> = ({ films, onClose }) => {
	const extendedInfo = useFilmDetails(films.id);

	return (
		<>
			<div
				className={styles["container"]}
				style={{
					backgroundImage: `linear-gradient(
						180deg,
						rgba(69, 78, 136, .96),
						rgba(16, 41, 73, .96)
					),
					url(https://image.tmdb.org/t/p/original${films?.backdrop_path})`,
					backgroundSize: "contain",
					backgroundPosition: "LEFT",
				}}
			>
				<div className={styles["info1"]}>
					<div className={styles["movie-image"]}>
						<img
							src={
								films?.poster_path !== null
									? `https://image.tmdb.org/t/p/w185${films?.poster_path}`
									: `https://place-hold.it/300x500/aaa/WHITE&text=NO-IMAGE-AVAILABLE&fontsize=20`
							}
							alt="poster"
						/>
					</div>
				</div>
				<div className={styles["info2"]}>
					<div className={styles["overview"]}>
						<h2>{extendedInfo?.tagline}</h2>
						{films.overview}
					</div>
					<div className={styles["moreinfo"]}>
						Release Date : {extendedInfo?.release_date}
					</div>
				</div>
			</div>
			<div className={styles["btn-container"]}>
				<button className={styles["btn"]} onClick={onClose}>
					Close
				</button>
			</div>
		</>
	);
};

export { FilmCard };
