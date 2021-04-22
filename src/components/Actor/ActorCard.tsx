import React from "react";
import styles from "./ActorCard.module.scss";
import { Person } from "../../hooks/search/interface";

interface Props {
	actor: Person | undefined;
}

const ActorCard: React.FC<Props> = ({ actor }) => {
	return (
		<>
			<div
				className={styles["actor-image"]}
				style={{
					backgroundImage: `
					url(https://image.tmdb.org/t/p/original/${actor?.profile_path})`,
					borderRadius: "10px",
				}}
			/>

			<div className={styles["actor-info"]}>
				<div className={styles["actor-details"]}>
					<h1>{actor?.name}</h1>
					<ul className={styles["date-of-birth"]}>
						{actor?.birthday}
					</ul>
				</div>
				<div className={styles["summary-row"]}>
					<div className={styles["asdf"]}>
						<h5>SUMMARY</h5>
					</div>
				</div>
				<div className={styles["description-container"]}>
					<p className={styles["actor-bio"]}>{actor?.biography}</p>
				</div>
			</div>
		</>
	);
};

export { ActorCard };
