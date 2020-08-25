import React, { useState } from "react";
import { TrendingPeopleResults } from "../../hooks/search/interface";
import { ActorModal } from "../Modal/ActorModal";
import { PersonCard } from "../Person/PersonCard";
import styles from "./CastImage.module.scss";

interface PersonImageProps {
	element: React.ReactNode;
}

const CastImage: React.FC<PersonImageProps> = ({ element }) => {
	let el = element as TrendingPeopleResults;

	const [isOpen, setIsOpen] = useState(false);

	const closeModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		setIsOpen(false);
	};

	console.log("el in CastImage: ", el);

	return (
		<div className={styles["container"]}>
			<img
				src={
					el !== null
						? `https://image.tmdb.org/t/p/original${el?.profile_path}`
						: `https://place-hold.it/300x500/aaa/WHITE&text=NO-IMAGE-AVAILABLE&fontsize=20`
				}
				alt="poster"
				onClick={() => setIsOpen(true)}
			/>

			<ActorModal isModalOpen={isOpen} onClose={closeModal}>
				<PersonCard onClose={closeModal} person={el} />
			</ActorModal>
		</div>
	);
};

export { CastImage };
