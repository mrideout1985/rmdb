import React from "react";
import { useParams } from "react-router-dom";
import { usePerson } from "../../../hooks/search/usePerson";
import { ActorCard } from "../../Actor/ActorCard";
import styles from "./PersonPage.module.scss";

const PersonPage = () => {
	const { pid }: any = useParams();
	const person = usePerson(pid);

	console.log(person);

	return (
		<div className={styles.container}>
			<div className={styles.filmcardcontainer}>
				<ActorCard actor={person} />
			</div>
		</div>
	);
};

export { PersonPage };
