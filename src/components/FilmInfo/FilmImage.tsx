import React, { useState } from "react";
import { Film } from "../../hooks/search/interface";
import { Modal } from "../Modal/Modal";
import { FilmCard } from "./FilmCard";
import styles from "./FilmImage.module.scss";

interface Props {
	element: React.ReactNode;
}

const FilmImage: React.FC<Props> = ({ element }) => {
	let film = element as Film;

	console.log("film in filmImage", film);

	return (
		<>
			<div className={styles.container}>
				<img
					src={
						film?.poster_path !== null
							? `https://image.tmdb.org/t/p/original${film?.poster_path}`
							: `https://place-hold.it/300x500/aaa/WHITE&text=NO-IMAGE-AVAILABLE&fontsize=20`
					}
					alt="poster"
				/>

				<div className={styles.filminfo}>
					{/* checks the media type and displays title / name alternatively */}
					{film.media_type === "tv" ? (
						<h3>{film.name}</h3>
					) : (
						<h3>{film.title}</h3>
					)}
				</div>
			</div>

			{/* <Modal
				isModalOpen={isOpen}
				header={film?.title}
				onClose={closeModal}
				film={film}
			>
				<FilmCard onClose={closeModal} films={film} />
			</Modal> */}
		</>
	);
};

export { FilmImage };
