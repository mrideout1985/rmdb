import React from "react";
import StarRatingComponent from "react-star-rating-component";
import styles from "./MediaPage.module.scss";
import { useParams } from "react-router-dom";
import { useFilmDetails } from "../../../hooks/search/useFilmDetails";
import { useHistory } from "react-router-dom";
import { useGetMovieCast } from "../../../hooks/search/useGetMovieCast";
import { Crew } from "../../../hooks/search/interface";
import { useGetMovieCrew } from "../../../hooks/search/useGetMovieCrew";
import Cast from "../../Cast/CastSmall/Cast";

const FilmPage = () => {
	let { id }: { id: string } = useParams();
	const film = useFilmDetails(parseInt(id));
	const cast = useGetMovieCast(parseInt(id));
	const crew = useGetMovieCrew(parseInt(id));
	let history = useHistory();

	const handleMovieGenres = () => {
		return (
			film?.genres &&
			film?.genres.map((el: { id: number; name: string }) => {
				return el.name;
			})
		);
	};

	const handleCrew = () => {
		let theCrew: Crew[] = [];
		if (crew !== undefined) {
			for (let i: number = 0; i < 20; i++) {
				theCrew.push(crew.crew[i]);
			}
		}
		return theCrew.map((el: Crew, key: number) => {
			if (el?.job === "Director") {
				return (
					<div className={styles["management"]}>
						<h4 id="name">{el?.name}</h4>
						<h4 id="job">{el?.job}</h4>
					</div>
				);
			}
		});
	};

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
						<div style={{ fontSize: "2rem", marginTop: "1rem" }}>
							<StarRatingComponent
								name="rate1"
								value={film?.vote_average ?? 0}
								starCount={10}
								starColor="gold"
								emptyStarColor="white"
							/>
						</div>

						<div className={styles["tagline"]}>
							<h5>{film?.tagline}</h5>
						</div>

						<div className={styles["overview"]}>
							<p>{film?.overview}</p>
							{handleCrew()}
						</div>
					</div>
				</div>
			</div>
			<hr />
			<Cast cast={cast?.cast} />
		</div>
	);
};

export { FilmPage };
