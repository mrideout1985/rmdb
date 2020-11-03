import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./components/Search/Search";
// import { Footer } from "./components/Footer/Footer";
import { Nav } from "./components/Navbar/Nav";
import { Home } from "./components/Pages/Home/Home";
import { FilmPage } from "./components/Pages/Media/FilmPage";
import { TvPage } from "./components/Pages/Media/TvPage";

const App = () => {
	const [searchTerm, setSearchTerm] = useState<string>("");

	const handleSearchTerm = (value: string) => {
		setSearchTerm(value);
	};

	return (
		<Router>
			<>
				<Nav>
					<Search setParentValue={handleSearchTerm} />
				</Nav>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/mediafilm-info/:id" component={FilmPage} />
					<Route path="/mediatv-info/:id" component={TvPage} />

					{/* <Route path="/film-info/:id" component={FilmInfo} /> */}
				</Switch>
				{/* <Footer /> */}
			</>
		</Router>
	);
};

export { App };
