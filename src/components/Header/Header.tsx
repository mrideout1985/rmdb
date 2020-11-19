import React from "react";
import { Film } from "../../hooks/search/interface";
import { useTrending } from "../../hooks/trending/useTrending";
import Search from "../Search/Search";
import styles from "./Header.module.scss";

// export const headerBackgroundImages = (url: string) => {
//     if (backgrounds?.results !== undefined) {
//         for (let i: number = 0; i < 20; i++) {
//             headerBackgrounds.push(trendingMovies?.results[i]);
//         }
//     }
//     return headerBackgrounds.map((el: Film, key) => {
//         return (
//             <>
//                 <PopularMovieCard element={el} />
//             </>
//         );
//     });
//     }
// }

const Header = () => {
	const backgrounds = useTrending();
	const backgroundList: any = [];
	const headerBackgroundImages = () => {
		const headerBackgrounds: any = [];

		if (backgrounds?.results !== undefined) {
			for (let i: number = 0; i < 20; i++) {
				headerBackgrounds.push(backgrounds.results[i]);
			}
		}
		return headerBackgrounds.map((el: Film, key: number) => {
			return backgroundList.push(el.backdrop_path);
		});
	};

	const selectBackgroundImage = () => {
		return backgroundList[
			Math.floor(Math.random() * backgroundList.length)
		];
	};

	headerBackgroundImages();

	console.log("backgroundImage", selectBackgroundImage());

	return (
		<header
			className={styles["header"]}
			style={{
				backgroundImage: `url(https://image.tmdb.org/t/p/original${selectBackgroundImage()})`,
			}}
		>
			<div className={styles["wrapper"]}>
				<h1>Welcome.</h1>
				<h2>
					Millions of movies, TV shows and people to discover. Explore
					Now
				</h2>
				<Search />
			</div>
		</header>
	);
};

export { Header };
