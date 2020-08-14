import React, { useState } from "react";
import { Film } from "../../hooks/search/interface";
import { Modal } from "../Modal/Modal";
import { FilmCard } from "./FilmCard";

interface Props {
	element: React.ReactNode;
}

const FilmImage: React.FC<Props> = ({ element }) => {
	let film = element as Film;

	const [isOpen, setIsOpen] = useState(false);

	const closeModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		setIsOpen(false);
	};

	return (
		<>
			<img
				src={
					film?.poster_path !== null
						? `https://image.tmdb.org/t/p/original${film?.poster_path}`
						: `https://place-hold.it/300x500/aaa/WHITE&text=NO-IMAGE-AVAILABLE&fontsize=20`
				}
				alt="poster"
				onClick={() => setIsOpen(true)}
			/>

			<Modal
				isModalOpen={isOpen}
				header={film?.title}
				onClose={closeModal}
				film={film}
			>
				<FilmCard onClose={closeModal} films={film} />
			</Modal>
		</>
	);
};

export { FilmImage };
