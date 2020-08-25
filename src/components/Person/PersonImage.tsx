import React, { useState } from "react";
import { TrendingPeopleResults } from "../../hooks/search/interface";
import { ActorModal } from "../Modal/ActorModal";
import { PersonCard } from "./PersonCard";

interface PersonImageProps {
	element: React.ReactNode;
}

const PersonImage: React.FC<PersonImageProps> = ({ element }) => {
	let person = element as TrendingPeopleResults;

	const [isOpen, setIsOpen] = useState(false);

	const closeModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		setIsOpen(false);
	};

	return (
		<>
			<img
				src={
					person?.profile_path !== null
						? `https://image.tmdb.org/t/p/original${person?.profile_path}`
						: `https://place-hold.it/300x500/aaa/WHITE&text=NO-IMAGE-AVAILABLE&fontsize=20`
				}
				alt="poster"
				onClick={() => setIsOpen(true)}
			/>

			<ActorModal isModalOpen={isOpen} onClose={closeModal}>
				<PersonCard onClose={closeModal} person={person} />
			</ActorModal>
		</>
	);
};

export { PersonImage };
