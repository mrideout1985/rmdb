import React from "react";
import { usePopularFilm } from "../../../hooks/popular/usePopularFilm";
import { usePopularTv } from "../../../hooks/popular/usePopularTv";
import { PopularResults } from "../interfaces";
import { PopularCard } from "./PopularCard/PopularCard";
import { Switcher } from "../../Switcher/Switcher";

interface Props {}

export interface SwitcherList {
	title: string;
	component: JSX.Element[];
}

const WhatsPopular: React.FC<Props> = () => {
	const popularMovie = usePopularFilm();
	const popularTv = usePopularTv();
	const ariaLabel = "What's popular";

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

	const switcherList: SwitcherList[] = [
		{ title: "Movies", component: popularMovieList() },
		{ title: "TV Shows", component: popularTvList() },
	];

	return (
		<>
			<Switcher label={ariaLabel} componentList={switcherList} />
		</>
	);
};

export { WhatsPopular };
