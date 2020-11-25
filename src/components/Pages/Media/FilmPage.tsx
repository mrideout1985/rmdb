import React from "react";
import styles from "./MediaPage.module.scss";
import { useParams } from "react-router-dom";
import { useFilmDetails } from "../../../hooks/search/useFilmDetails";
import { useHistory } from "react-router-dom";

// import { useGetMovieCast } from "../../../hooks/search/useGetMovieCast";
// import { CastImage } from "../../Cast/CastImage";
// import { Cast } from "../../../hooks/search/interface";

const FilmPage = () => {
	let { id }: { id: string } = useParams();
	const film = useFilmDetails(parseInt(id));
	// const filmCast = useGetMovieCast(parseInt(id));
	let history = useHistory();

	const handleMovieGenres = () => {
		return (
			film?.genres &&
			film?.genres.map((el: { id: number; name: string }) => {
				return el.name;
			})
		);
	};

	// const handleCast = () => {
	// 	let mediaCast: Cast[] = [];

	// 	if (filmCast !== undefined) {
	// 		for (let i: number = 0; i < 4; i++) {
	// 			mediaCast.push(filmCast?.cast[i]);
	// 		}
	// 	}
	// 	return mediaCast.map((el: Cast, key: number) => {
	// 		return (
	// 			<>
	// 				<CastImage element={el} key={key} />
	// 			</>
	// 		);
	// 	});
	// };

	const handleDate = (date: string | undefined) => {
		return date?.split("").splice(0, 4);
	};

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
					<div
						className={styles["close"]}
						onClick={() => {
							history.goBack();
						}}
					/>
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
						{/* <div className={styles["cast"]}>
							{handleCast()}
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
						</div> */}
					</div>
				</div>
			</div>
			<hr />
		</div>
	);
};

export { FilmPage };
