import React from "react";
import { useParams } from "react-router-dom";
import { TV } from "../../../hooks/search/interface";
// import { useGetTvCast } from "../../../hooks/search/useGetTvCast";
import { useTvDetails } from "../../../hooks/search/useTvDetails";
import styles from "./MediaPage.module.scss";

interface Props {}

const TvPage: React.FC<TV> = (props: Props) => {
	let { id }: { id: string } = useParams();
	const tv = useTvDetails(parseInt(id));
	// const mediaCast = useGetTvCast(id);

	const handleMovieGenres = () => {
		return (
			tv?.genres &&
			tv?.genres.map((el: { id: number; name: string }, key) => {
				return el.name;
			})
		);
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
					url(https://image.tmdb.org/t/p/original${tv?.backdrop_path})`,
					}}
				>
					<img
						src={
							tv?.poster_path !== null
								? `https://image.tmdb.org/t/p/original${tv?.poster_path}`
								: `https://place-hold.it/300x500/aaa/WHITE&text=NO-IMAGE-AVAILABLE&fontsize=20`
						}
						alt="Poster"
					/>
					<div className={styles["media-overview"]}>
						<h1>
							{tv?.name}{" "}
							<span>
								<h5>{handleDate(tv?.first_air_date)}</h5>
							</span>
						</h1>
						<div className={styles["genres"]}>
							{handleMovieGenres()?.join(" - ")}
						</div>
						<div className={styles["overview"]}>
							<p>{tv?.overview}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { TvPage };
