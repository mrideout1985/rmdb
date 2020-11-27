import React from "react";
import styles from "./CastSmall.module.scss";
import { Cast } from "../../../hooks/search/interface";
import { PopularPersonCard } from "../../Trending/Popular/PopularPersonCard/PopularPersonCard";

interface Props {
	cast: Cast[] | undefined;
}

const CastSmall: React.FC<Props> = ({ cast }) => {
	const handleCast = () => {
		return cast?.map((el: Cast, key: number) => {
			return (
				<>
					<PopularPersonCard element={el} key={key} />
				</>
			);
		});
	};

	return (
		<div className={styles["cast-container"]}>
			<div className={styles["cast"]}>
				<h1>Cast</h1>
				<div className={styles["cast-details"]}>{handleCast()}</div>
			</div>
		</div>
	);
};

export default CastSmall;
