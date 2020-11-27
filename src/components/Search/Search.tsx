import React, { useState, useRef } from "react";
import { useDebounce } from "react-use";
import { Link } from "react-router-dom";
import { useClickAway } from "react-use";
import { Film } from "../../hooks/search/interface";
import { useSearch } from "../../hooks/search/useSearch";
import { FilmImage } from "../FilmInfo/FilmImage";
import styles from "./Search.module.scss";

const Search = () => {
	const [input, setInput] = useState("");
	const [search, setSearch] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const filmResults = useSearch(search);
	const ref = useRef(null);

	useClickAway(ref, () => {
		setIsOpen(false);
	});

	// eslint-disable-next-line no-empty-pattern
	const [] = useDebounce(
		() => {
			setSearch(input);
		},
		100,
		[input]
	);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setInput(e.target.value);
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
						<li key={key}>
							<FilmImage film={el} />
						</li>
					</Link>
				);
			});
		}
	};

	return (
		<>
			<form className={styles.form}>
				<div className={styles.search}>
					<div className={styles["input"]}>
						<input
							onChange={handleChange}
							value={input}
							placeholder="Search for movie or tv show..."
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
