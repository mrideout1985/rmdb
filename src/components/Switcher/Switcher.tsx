import React, { useState, useRef } from "react";
import styles from "./Switcher.module.scss";
interface SwitcherList {
	title: string;
	component: JSX.Element[];
}

interface Props {
	label: string;
	componentList: SwitcherList[];
}

const Switcher: React.FC<Props> = ({ label, componentList }) => {
	const [selected, setSelected] = useState(0);
	const tabsRef = useRef(null!);

	const handleTabSelection = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		setSelected(parseInt((event.target as HTMLButtonElement).id));
	};

	const components = () => componentList.map((child) => child.component);

	const buttonNames = () => componentList.map((child) => child.title);

	const displayComponents = () => {
		for (let i: number = 0; i < componentList.length; i++) {
			return componentList.map((el, key) => {
				return (
					<div
						className={[
							key === selected ? "" : styles["hide"],
							[styles["card-container"]],
						].join(" ")}
					>
						{components()[key]}
					</div>
				);
			});
		}
	};

	const buttons = buttonNames().map((el: string, key) => {
		return (
			<button
				key={key}
				className={styles["button"]}
				role="tab"
				aria-selected="false"
				aria-controls={`${el}-tab`}
				id={`${key}`}
				tabIndex={-1}
				onClick={(event) => handleTabSelection(event)}
			>
				{el}
			</button>
		);
	});

	return (
		<div className={styles["tabs"]} ref={tabsRef}>
			<div
				role="tablist"
				aria-label={label}
				className={styles["btn-container"]}
			>
				<div className={styles["switcher-title"]}>
					<h5>{label}</h5>
					<div className={styles["btns"]}>{buttons}</div>
				</div>
			</div>
			<>{displayComponents()}</>
		</div>
	);
};

export { Switcher };
