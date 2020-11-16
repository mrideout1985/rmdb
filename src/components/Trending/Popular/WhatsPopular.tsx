import React from "react";
import { usePopularFilm } from "../../../hooks/popular/usePopularFilm";
import { usePopularTv } from "../../../hooks/popular/usePopularTv";
import { PopularResults } from "../interfaces";
import { PopularCard } from "./PopularCard/PopularCard";
import { Switcher } from "../../Switcher/Switcher";
import { usePopularPerson } from "../../../hooks/popular/usePopularPerson";
import { PopularPersonResults } from "../../../hooks/search/interface";
import { PopularPersonCard } from "./PopularPersonCard/PopularPersonCard";

interface Props {}

export interface SwitcherList {
	title: string;
	component: JSX.Element[];
}

const WhatsPopular: React.FC<Props> = () => {
	const popularMovie = usePopularFilm();
	const popularTv = usePopularTv();
	const popularPerson = usePopularPerson();
	const ariaLabel = "What's popular";

	console.log("popperson", popularPerson);

	const popularMovieList = (): JSX.Element[] => {
		const popMovieList: PopularResults[] = [];
		if (popularMovie?.results !== undefined) {
			for (let i: number = 0; i < 20; i++) {
				popMovieList.push(popularMovie.results[i]);
			}
		}
		return popMovieList.map((el: PopularResults) => {
			return <PopularCard element={el} />;
		});
	};

	const popularTvList = (): JSX.Element[] => {
		const popTvList: PopularResults[] = [];
		if (popularTv?.results !== undefined) {
			for (let i: number = 0; i < 20; i++) {
				popTvList.push(popularTv.results[i]);
			}
		}
		return popTvList.map((el: PopularResults) => {
			return <PopularCard element={el} />;
		});
	};

	const popularPeople = (): JSX.Element[] => {
		const popPersonList: PopularPersonResults[] = [];
		if (popularPerson?.results !== undefined) {
			for (let i: number = 0; i < 20; i++) {
				popPersonList.push(popularPerson.results[i]);
			}
		}
		return popPersonList.map((el: PopularPersonResults) => {
			return <PopularPersonCard element={el} />;
		});
	};

	const switcherList: SwitcherList[] = [
		{ title: "Movies", component: popularMovieList() },
		{ title: "TV Shows", component: popularTvList() },
		{ title: "People", component: popularPeople() },
	];

	return (
		<>
			<Switcher label={ariaLabel} componentList={switcherList} />
		</>
	);
};

export { WhatsPopular };
