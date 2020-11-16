import React from "react";
import styles from "./FilmCard.module.scss";
import { FilmDetails, WholeTeam } from "../../hooks/search/interface";
import { CastImage } from "./CastImage";
import { Link } from "react-router-dom";
// import { useFilmDetails } from "../../hooks/search/useFilmDetails";
// import { useGetCast } from "../../hooks/search/useGetCast";

interface FilmCardProps {
	films: FilmDetails | undefined;
	cast: WholeTeam | undefined;
}

const FilmCard: React.FC<FilmCardProps> = ({ films, cast }) => {
	let mediaCast: any = [];

	const handleCast = () => {
		if (cast !== null) {
			for (let i: number = 0; i < 12; i++) {
				mediaCast.push(cast?.cast[i]);
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

	return (
		<div className={styles["container"]}>
			<div
				className={styles["movie-image"]}
				style={{
					backgroundImage: `
					url(https://image.tmdb.org/t/p/original${films?.backdrop_path})`,
					borderRadius: "10px",
				}}
			></div>

			<div className={styles["text-movie-cont"]}>
				<div className={styles["col1"]}>
					<h1>
						{films?.title}
						{films?.name}
					</h1>
					<ul className={styles["movie-gen"]}>
						{/* <li>PG-13 /</li>
						<li>2h 49min /</li>
						<li>Adventure, Drama, Sci-Fi,</li> */}
					</ul>
				</div>
				<div className={styles["summary-row"]}>
					<div className={styles["asdf"]}>
						<h5>SUMMARY</h5>
					</div>
				</div>
				<div className={styles["col1"]}>
					<p className={styles["movie-description"]}>
						{films?.overview}
					</p>
				</div>
				<div className={styles["castcontainer"]}>
					<h5>CAST</h5>
					<div className={styles["cast"]}>{handleCast()}</div>
				</div>
			</div>
		</div>
	);
};

export { FilmCard };
