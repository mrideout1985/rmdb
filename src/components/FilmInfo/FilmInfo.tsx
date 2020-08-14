import React from "react";
import { useParams } from "react-router-dom";
import { useFilmDetails } from "../../hooks/search/useFilmDetails";
import styles from "./FilmInfo.module.scss";

const FilmInfo = () => {
	let { id } = useParams();
	const film = useFilmDetails(id);

	return (
		<div className={styles["container"]}>
			<div
				className={styles["film"]}
				style={{
					backgroundImage: `linear-gradient(to right bottom, rgba(345,78,96,0.7) 0%, rgba(211,217,17,0.7) 69%, rgba(256,191,91,0.8) 100%),
					url(https://image.tmdb.org/t/p/w185${film?.backdrop_path})`,
					backgroundSize: "contain",
					backgroundPosition: "center",
				}}
			>
				<div className={styles["header"]}>
					<h1>{film?.title}</h1>
				</div>

				<div className={styles["filminfocontainer"]}>
					<div className={styles["image"]}>
						<img
							src={
								film?.poster_path !== null
									? `https://image.tmdb.org/t/p/w185${film?.poster_path}`
									: `https://place-hold.it/300x500/aaa/WHITE&text=NO-IMAGE-AVAILABLE&fontsize=20`
							}
							alt="poster"
						/>
					</div>
					<div className={styles["info"]}>
						<p className="">{film?.overview}</p>
						<hr />
						<p className=""> {film?.runtime} Mins.</p>
						<hr />
						<p className="" style={{ textTransform: "uppercase" }}>
							{film?.original_language}
						</p>
						<hr />
						<p className="">{film?.vote_average} / 10</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export { FilmInfo };
