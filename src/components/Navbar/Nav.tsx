import React from "react";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";
import rmdb from "../../images/rmdb.png";

interface Props {
	// children: React.ReactNode;
}

const Nav: React.FC<Props> = () => {
	return (
		<div className={styles["nav"]}>
			<nav className={styles["nav-links"]}>
				<Link to="/">
					<img src={rmdb} alt="rmdb" />
				</Link>
				<div className={styles["links"]}>
					Movies
					<div className={styles["dropdown"]}>
						<Link to="/popular">Popular</Link>
						<Link to="/popular">Up And Coming</Link>
						<Link to="/popular">Top Rated</Link>
					</div>
				</div>
				<div className={styles["links"]}>
					TV Shows
					<div className={styles["dropdown"]}>
						<Link to="/popular">Popular</Link>
						<Link to="/popular">Up And Coming</Link>
						<Link to="/popular">Top Rated</Link>
					</div>
				</div>
				<div className={styles["links"]}>
					People
					<div className={styles["dropdown"]}>
						<Link to="/popular">Popular</Link>
						<Link to="/popular">Up And Coming</Link>
						<Link to="/popular">Top Rated</Link>
					</div>
				</div>
			</nav>
		</div>
	);
};

export { Nav };
