import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
	return (
		<div
			className={styles["container"]}
			role="contentinfo"
			aria-label="Footer"
			data-testid="footer"
		>
			<div className={styles["container__copyright"]}>
				© 2020 Matthew Rideout.
			</div>
		</div>
	);
};

export { Footer };
