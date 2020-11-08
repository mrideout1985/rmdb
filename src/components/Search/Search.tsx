import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useClickAway } from "react-use";
import { Film } from "../../hooks/search/interface";
import { useSearch } from "../../hooks/search/useSearch";
import { FilmImage } from "../FilmInfo/FilmImage";
import styles from "./Search.module.scss";

const Search = () => {
	const [input, setInput] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const filmResults = useSearch(input);
	const ref = useRef(null);

	// eslint-disable-next-line no-empty-pattern

	useClickAway(ref, () => {
		setIsOpen(false);
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setInput(e.target.value);
	};

	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	const filmList = (films: Film | undefined) => {
		let filmResultsArray = [];
		if (films !== undefined) {
			if (Object.keys(films).length > 0) {
				for (let i: number = 0; i < 5; i++) {
					let entry = Object.values(films)[3];
					filmResultsArray.push(entry[i]);
				}
			}

			return filmResultsArray.map((el: Film, key) => {
				if (el === undefined) {
					return "";
				}
				return (
					<Link
						onClick={() => {
							setInput("");
						}}
						to={`/${
							el.media_type === "tv"
								? "mediatv-info"
								: "mediafilm-info"
						}/${el.id}`}
					>
						<li>
							<FilmImage element={el} />
						</li>
					</Link>
				);
			});
		}
	};

	return (
		<>
			<form className={styles.form} onSubmit={handleSubmit}>
				<div className={styles.search}>
					<div className={styles["input"]}>
						<input
							onChange={handleChange}
							value={input}
							placeholder="Search for Movie or TV here"
							autoComplete="off"
							id="search"
							type="search"
							onFocus={() => setIsOpen(true)}
						/>

						<ul ref={ref}>{isOpen && filmList(filmResults)}</ul>
					</div>
				</div>
			</form>
		</>
	);
};

export default Search;
