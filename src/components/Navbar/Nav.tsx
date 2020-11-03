import React from "react";
import styles from "./Nav.module.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

interface Props {
	children: React.ReactNode;
}

const Nav: React.FC<Props> = ({ children }) => {
	return (
		<div className={styles["nav"]}>
			{children}
			{/* <nav className={styles["nav-links"]}>
				<a href="/" className={styles["links"]}>
					Movies
					<div className={styles["dropdown"]}>
						<Link to="/popular">Popular</Link>
						<Link to="/popular">Up And Coming</Link>
						<Link to="/popular">Top Rated</Link>
					</div>
				</a>
			</nav> */}
		</div>
	);
};

export { Nav };
