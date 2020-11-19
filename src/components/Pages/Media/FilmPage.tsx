import React from "react";
import styles from "./MediaPage.module.scss";
import { Link, useParams } from "react-router-dom";
import { useFilmDetails } from "../../../hooks/search/useFilmDetails";
import { useGetMovieCast } from "../../../hooks/search/useGetMovieCast";
import { CastImage } from "../../FilmInfo/CastImage";

const FilmPage = () => {
	let { id }: any = useParams();
	const film = useFilmDetails(id);
	const filmCast = useGetMovieCast(id);

	const handleMovieGenres = () => {
		return (
			film?.genres &&
			film?.genres.map((el: { id: number; name: string }, key) => {
				return el.name;
			})
		);
	};

	let mediaCast: any = [];

	const handleCast = () => {
		if (filmCast !== null) {
			for (let i: number = 0; i < 4; i++) {
				mediaCast.push(filmCast?.cast[i]);
			}
		}
		return mediaCast.map((el: string, key: any) => {
			return (
				<Link to="/person-page/">
					<CastImage element={el} key={key} />
				</Link>
			);
		});
	};

	const handleDate = (date: string | undefined) => {
		return date?.split("").splice(0, 4);
	};

	handleMovieGenres();

	return (
		<div className={styles.container}>
			<div className={styles["media-info"]}>
				<div
					className={styles["details"]}
					style={{
						backgroundImage: `
					url(https://image.tmdb.org/t/p/original${film?.backdrop_path})`,
					}}
				>
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
								<h5>{handleDate(film?.release_date)}</h5>
							</span>
						</h1>
						<div className={styles["genres"]}>
							{handleMovieGenres()?.join(" - ")}
							<span>
								<h5>{film?.runtime} mins</h5>
							</span>
						</div>
						<div className={styles["overview"]}>
							<p>{film?.overview}</p>
						</div>
						<div className={styles["cast"]}>
							{handleCast()}{" "}
							<span>
								<Link
									style={{
										color: "white",
										fontFamily: "monospace",
										fontSize: "1.5rem",
									}}
									to="/full-cast/"
								>
									...See More
								</Link>
							</span>
						</div>
					</div>
				</div>
			</div>
			<hr />
		</div>
	);
};

export { FilmPage };
