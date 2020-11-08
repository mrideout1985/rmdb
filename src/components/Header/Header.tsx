import React from "react";
import Search from "../Search/Search";
import styles from "./Header.module.scss";

const Header = () => {
	return (
		<header className={styles["header"]}>
			<Search />
		</header>
	);
};

export { Header };
