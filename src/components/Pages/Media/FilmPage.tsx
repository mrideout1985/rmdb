import React from "react";
import styles from "./MediaPage.module.scss";
import { useParams } from "react-router-dom";
import { useFilmDetails } from "../../../hooks/search/useFilmDetails";
import { FilmCard } from "../../FilmInfo/FilmCard";
import { useGetMovieCast } from "../../../hooks/search/useGetMovieCast";

const FilmPage = () => {
	let { id }: any = useParams();
	const film = useFilmDetails(id);
	const mediaCast = useGetMovieCast(id);

	return (
		<div className={styles.container}>
			<div className={styles.filmcardcontainer}>
				<FilmCard films={film} cast={mediaCast} />
			</div>
		</div>
	);
};

export { FilmPage };
