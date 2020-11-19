import React from "react";
import { Link } from "react-router-dom";
import { TvDetails } from "./interface";
import styles from "./PopularCard.module.scss";

interface Props {
	element?: React.ReactNode;
}

const PopularTvCard: React.FC<Props> = ({ element }) => {
	const tv = element as TvDetails;

	return (
		<Link to={`/mediatv-info/${tv.id}`}>
			<div className={styles.container}>
				<div className={styles.image}>
					<img
						src={
							tv?.poster_path !== null
								? `https://image.tmdb.org/t/p/original${tv?.poster_path}`
								: `https://place-hold.it/300x500/aaa/WHITE&text=NO-IMAGE-AVAILABLE&fontsize=20`
						}
						alt=""
					/>
				</div>
				<div className={styles.content}>
					<h2>{tv.name}</h2>
					<p>{tv.first_air_date}</p>
				</div>
			</div>
		</Link>
	);
};

export { PopularTvCard };
