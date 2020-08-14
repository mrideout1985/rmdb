import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./components/Search/Search";
import { Home } from "./components/Pages/Home";
// import { Footer } from "./components/Footer/Footer";
import { Nav } from "./components/Navbar/Nav";

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
					<Route
						path="/"
						exact
						children={<Home searchTerm={searchTerm} />}
					/>
					{/* <Route path="/film-info/:id" component={FilmInfo} /> */}
				</Switch>
				{/* <Footer /> */}
			</>
		</Router>
	);
};

export { App };
