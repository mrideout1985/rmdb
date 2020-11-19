import React from "react";
import { useParams } from "react-router-dom";
import { usePerson } from "../../../hooks/search/usePerson";
import { ActorCard } from "../../Actor/ActorCard";
import styles from "./PersonPage.module.scss";

const PersonPage = () => {
	interface Pid {
		pid: string;
	}

	const { pid } = useParams<Pid>();
	const person = usePerson(parseInt(pid));

	return (
		<div className={styles.container}>
			<div className={styles.filmcardcontainer}>
				<ActorCard actor={person} />
			</div>
		</div>
	);
};

export { PersonPage };
