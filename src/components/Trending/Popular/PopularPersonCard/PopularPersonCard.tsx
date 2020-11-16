import React from "react";
import { Link } from "react-router-dom";
import {
	Film,
	FilmDetails,
	PopularPerson,
	PopularPersonResults,
} from "../../../../hooks/search/interface";
import { PopularResults } from "../../interfaces";
import styles from "./PopularCard.module.scss";

interface Props {
	element?: React.ReactNode;
}

const PopularPersonCard: React.FC<Props> = ({ element }) => {
	const person = element as PopularPersonResults;

	return (
		<Link to={`/person-page/${person.id}`}>
			<div className={styles.container}>
				<a href="/" className={styles.image}>
					<img
						src={
							person?.profile_path !== null
								? `https://image.tmdb.org/t/p/original${person?.profile_path}`
								: `https://place-hold.it/300x500/aaa/WHITE&text=NO-IMAGE-AVAILABLE&fontsize=20`
						}
						alt=""
					/>
				</a>
				<div className={styles.content}>
					<h2>{person.name}</h2>
				</div>
			</div>
		</Link>
	);
};

export { PopularPersonCard };
