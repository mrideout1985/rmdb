import React from "react";
import styles from "./PersonCard.module.scss";
import { TrendingPeopleResults } from "../../hooks/search/interface";
import { usePerson } from "../../hooks/search/usePerson";

interface FilmCardProps {
	person: TrendingPeopleResults;
	onClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const PersonCard: React.FC<FilmCardProps> = ({ person, onClose }) => {
	const personInfo = usePerson(person.id);

	console.log("Person", personInfo);

	return (
		<div className={styles["container"]}>
			<div
				className={styles["movie-image"]}
				style={{
					backgroundImage: `
					url(https://image.tmdb.org/t/p/original${personInfo?.profile_path})`,
				}}
			></div>

			<div className={styles["actorbio"]}>
				<div className={styles["name"]}>
					<h1>{personInfo?.name}</h1>
				</div>
				<div className={styles["header"]}>
					<h5>Bio</h5>
				</div>
				<div className={styles["biography"]}>
					<p>{personInfo?.biography}</p>
				</div>
			</div>
		</div>
	);
};

export { PersonCard };
