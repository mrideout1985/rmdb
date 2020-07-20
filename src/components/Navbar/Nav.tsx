import React from "react";
import styles from "./Nav.module.scss";

interface Props {
	children: React.ReactNode;
}

const Nav: React.FC<Props> = ({ children }) => {
	return <div className={styles["nav"]}>{children}</div>;
};

export { Nav };
