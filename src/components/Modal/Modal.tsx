import React, { useEffect, useRef, ReactNode, RefObject } from "react";
import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";
import FocusLock from "react-focus-lock";
import { useFilmDetails } from "../../hooks/search/useFilmDetails";
import { Film } from "../../hooks/search/interface";

interface ModalProps {
	children: ReactNode;
	onClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	header: string | undefined;
	isModalOpen: boolean;
	film: Film;
	innerRef?: RefObject<HTMLDivElement>;
}

const modalRoot = document.body;

const Modal = ({
	children,
	isModalOpen,
	innerRef,
	onClose,
	header,
	film,
}: ModalProps) => {
	const container = useRef<HTMLDivElement>(document.createElement("div"));
	const currentContainer = container.current;

	const extendedInfo = useFilmDetails(film?.id);

	let filmGenres: string[] = [];

	const listGenres = () => {
		const genArr = extendedInfo?.genres.forEach((el) => {
			filmGenres.push(el.name);
		});

		return genArr;
	};

	listGenres();

	useEffect(() => {
		if (isModalOpen) {
			modalRoot.appendChild(currentContainer);
		}

		return () => {
			currentContainer.parentNode?.removeChild(currentContainer);
		};
	}, [currentContainer, isModalOpen]);

	const Wrapper = (): JSX.Element => {
		return (
			<>
				{isModalOpen && (
					<FocusLock>
						<div
							className={styles["container"]}
							ref={innerRef}
							data-testid="modal"
						>
							<div className={styles["container__body"]}>
								<div className={styles["header"]}>
									{header}
									<div className={styles["header-info"]}>
										<p>{filmGenres.join(`-`)}</p>
									</div>
								</div>
								{children}
							</div>
							{/* <button onClick={onClose}>Close</button> */}
						</div>
					</FocusLock>
				)}
			</>
		);
	};

	return createPortal(Wrapper(), currentContainer);
};

export { Modal };
