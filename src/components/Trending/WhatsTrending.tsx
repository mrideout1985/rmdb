import React from "react";
import { Film } from "../../hooks/search/interface";
// import { usePeople } from "../../hooks/trending/usePeople";
import { useTrending } from "../../hooks/trending/useTrending";
import { useTrendingTV } from "../../hooks/trending/useTrendingTv";
import { Switcher } from "../Switcher/Switcher";
import { PopularMovieCard } from "./Popular/PopularCard/PopularMovieCard";
import { PopularTvCard } from "./Popular/PopularCard/PopularTvCard";

interface Props {}

export interface SwitcherList {
	title: string;
	component: JSX.Element[];
}

const WhatsTrending = (props: Props) => {
	const trendingMovies = useTrending();
	const trendingTv = useTrendingTV();
	// const trendingPeople = usePeople();

	const trendingMovieList = (): JSX.Element[] => {
		const trendingMovieList: Film[] = [];
		if (trendingMovies?.results !== undefined) {
			for (let i: number = 0; i < 20; i++) {
				trendingMovieList.push(trendingMovies?.results[i]);
			}
		}
		return trendingMovieList.map((el: Film, key) => {
			return (
				<>
					<PopularMovieCard element={el} key={key} />
				</>
			);
		});
	};

	const trendingTvList = (): JSX.Element[] => {
		const trendingTvList: Film[] = [];
		if (trendingTv?.results !== undefined) {
			for (let i: number = 0; i < 20; i++) {
				trendingTvList.push(trendingTv?.results[i]);
			}
		}
		return trendingTvList.map((el: Film, key) => {
			return (
				<>
					<PopularTvCard element={el} key={key} />
				</>
			);
		});
	};

	const switcherList: SwitcherList[] = [
		{ title: "Movies", component: trendingMovieList() },
		{ title: "TV Shows", component: trendingTvList() },
	];

	return (
		<>
			<Switcher
				label={"Trending"}
				componentList={switcherList}
				key={Date.now()}
			/>
		</>
	);
};

export { WhatsTrending };
