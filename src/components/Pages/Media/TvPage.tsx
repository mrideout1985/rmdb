import React from "react";
import { useParams } from "react-router-dom";
import { TV } from "../../../hooks/search/interface";
import { useGetTvCast } from "../../../hooks/search/useGetTvCast";
import { useTvDetails } from "../../../hooks/search/useTvDetails";
import { FilmCard } from "../../FilmInfo/FilmCard";
import styles from "./MediaPage.module.scss";

interface Props {}

const TvPage: React.FC<TV> = (props: Props) => {
	let { id }: any = useParams();
	const tv = useTvDetails(id);
	const mediaCast = useGetTvCast(id);

	return (
		<div className={styles.container}>
			<div className={styles.filmcardcontainer}>
				<FilmCard films={tv} cast={mediaCast} />
			</div>
		</div>
	);
};

export { TvPage };
