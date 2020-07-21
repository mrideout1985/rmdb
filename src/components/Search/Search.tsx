import React, { useState } from "react";
import { useDebounce } from "react-use";
import styles from "./Search.module.scss";

interface Props {
	setParentValue: (e: string) => void;
}

const Search: React.FC<Props> = ({ setParentValue }) => {
	const [input, setInput] = useState("");

	// eslint-disable-next-line no-empty-pattern
	const [] = useDebounce(
		() => {
			setParentValue(input);
		},
		500,
		[input]
	);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setInput(e.target.value);
	};

	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<>
			<div className={styles["container"]}>
				<form onSubmit={handleSubmit}>
					<div className={styles["input"]}>
						<input
							onChange={handleChange}
							value={input}
							placeholder="search"
						/>
					</div>
				</form>
			</div>
		</>
	);
};

export default Search;
