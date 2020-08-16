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
								{children}
								<button
									className={styles["close-btn"]}
									onClick={onClose}
								>
									<div className={styles["x1"]} />
									<div className={styles["x2"]} />
								</button>
							</div>
						</div>
					</FocusLock>
				)}
			</>
		);
	};

	return createPortal(Wrapper(), currentContainer);
};

export { Modal };
