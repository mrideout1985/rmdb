import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav } from "./components/Navbar/Nav";
import { Home } from "./components/Pages/Home/Home";
import { FilmPage } from "./components/Pages/Media/FilmPage";
import { TvPage } from "./components/Pages/Media/TvPage";
import { PersonPage } from "./components/Pages/Person/PersonPage";

const App = () => {
	return (
		<Router>
			<>
				<Nav />

				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/mediafilm-info/:id" component={FilmPage} />
					<Route path="/mediatv-info/:id" component={TvPage} />
					<Route path="/person-page/:pid" component={PersonPage} />
				</Switch>
				{/* <Footer /> */}
			</>
		</Router>
	);
};

export { App };
