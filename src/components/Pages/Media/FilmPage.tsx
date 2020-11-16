import React from "react";
import styles from "./MediaPage.module.scss";
import { useParams } from "react-router-dom";
import { useFilmDetails } from "../../../hooks/search/useFilmDetails";
import { useGetMovieCast } from "../../../hooks/search/useGetMovieCast";

const FilmPage = () => {
	let { id }: any = useParams();
	const film = useFilmDetails(id);
	// const mediaCast = useGetMovieCast(id);

	const handleMovieGenres = () => {
		return (
			film?.genres &&
			film?.genres.map((el: { id: number; name: string }, key) => {
				return el.name;
			})
		);
	};

	handleMovieGenres();

	return (
		<div className={styles.container}>
			<div className={styles["media-info"]}>
				<div className={styles["details"]}>
					<img
						src={
							film?.poster_path !== null
								? `https://image.tmdb.org/t/p/original${film?.poster_path}`
								: `https://place-hold.it/300x500/aaa/WHITE&text=NO-IMAGE-AVAILABLE&fontsize=20`
						}
						alt="Poster"
					/>
					<div className={styles["media-overview"]}>
						<h1>
							{film?.title}{" "}
							<span>
								<h5>{film?.release_date}</h5>
							</span>
						</h1>
						<div className={styles["genres"]}>
							{handleMovieGenres()?.join(" - ")}
						</div>
						<div className={styles["overview"]}>
							<p>{film?.overview}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { FilmPage };
