import React, { useState } from "react";
import styles from "./Stories.module.scss";
import { PopularCard } from "../PopularCard/PopularCard";
export default {
	title: "PopularCard",
	component: PopularCard,
};

export const Default = () => {
	return (
		<div className={styles["container"]}>
			<PopularCard />
		</div>
	);
};
