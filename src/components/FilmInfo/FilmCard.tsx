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
				className={styles["movie-image"]}
				style={{
					backgroundImage: `
					url(https://image.tmdb.org/t/p/original${films?.backdrop_path})`,
				}}
			></div>

			<div className={styles["text-movie-cont"]}>
				<div className={styles["col1"]}>
					<h1>{extendedInfo?.title}</h1>
					<ul className={styles["movie-gen"]}>
						<li>PG-13 /</li>
						<li>2h 49min /</li>
						<li>Adventure, Drama, Sci-Fi,</li>
					</ul>
				</div>
				<div className={styles["summary-row"]}>
					<div className={styles["col2"]}>
						<h5>SUMMARY</h5>
					</div>
				</div>
				<div className={styles["col1"]}>
					<p className={styles["movie-description"]}>
						{extendedInfo?.overview}
					</p>
				</div>
			</div>
		</>
	);
};

export { FilmCard };
