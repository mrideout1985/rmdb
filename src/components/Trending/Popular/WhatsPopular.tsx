import React from "react";
import { usePopularFilm } from "../../../hooks/popular/usePopularFilm";
import { usePopularPerson } from "../../../hooks/popular/usePopularPerson";
import { usePopularTv } from "../../../hooks/popular/usePopularTv";
import { PopularPersonResults } from "../../../hooks/search/interface";
import { Switcher } from "../../Switcher/Switcher";
import { PopularResults } from "../interfaces";
import { PopularMovieCard } from "./PopularCard/PopularMovieCard";
import { PopularTvCard } from "./PopularCard/PopularTvCard";
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

	const popularMovieList = (): JSX.Element[] => {
		const popMovieList: PopularResults[] = [];
		if (popularMovie?.results !== undefined) {
			for (let i: number = 0; i < 20; i++) {
				popMovieList.push(popularMovie.results[i]);
			}
		}
		return popMovieList.map((el: PopularResults, key) => {
			return <PopularMovieCard film={el} key={key} />;
		});
	};

	const popularTvList = (): JSX.Element[] => {
		const popTvList: PopularResults[] = [];
		if (popularTv?.results !== undefined) {
			for (let i: number = 0; i < 20; i++) {
				popTvList.push(popularTv.results[i]);
			}
		}
		return popTvList.map((el: PopularResults, key) => {
			return <PopularTvCard element={el} key={key} />;
		});
	};

	const popularPeople = (): JSX.Element[] => {
		const popPersonList: PopularPersonResults[] = [];
		if (popularPerson?.results !== undefined) {
			for (let i: number = 0; i < 20; i++) {
				popPersonList.push(popularPerson.results[i]);
			}
		}
		return popPersonList.map((el: PopularPersonResults, key) => {
			return <PopularPersonCard element={el} key={key} />;
		});
	};

	const switcherList: SwitcherList[] = [
		{ title: "Movies", component: popularMovieList() },
		{ title: "TV Shows", component: popularTvList() },
		{ title: "People", component: popularPeople() },
	];

	return (
		<>
			<Switcher
				label={"Popular"}
				componentList={switcherList}
				key={Date.now()}
			/>
		</>
	);
};

export { WhatsPopular };
