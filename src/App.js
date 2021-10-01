import React, { Suspense } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import { DataProvider } from "./contexts/DataContext";
import Loading from "./components/Loading";
const AppBar = React.lazy(() => import("./components/AppBar"));
const Footer = React.lazy(() => import("./components/Footer"));
const Home = React.lazy(() => import("./pages/Home"));
const Values = React.lazy(() => import("./pages/Values"));
const Period = React.lazy(() => import("./pages/Period"));
const Result = React.lazy(() => import("./pages/Result"));

export default function App() {
	return (
		<DataProvider>
			<Router>
				<Suspense fallback={<Loading />}>
					<AppBar />
					<Switch>
						<Route path="/" component={Home} exact/>
						<Route path="/values" component={Values} exact />
						<Route path="/period" component={Period} exact />
						<Route path="/result" component={Result} exact />
					</Switch>
					<Footer />
				</Suspense>
			</Router>
		</DataProvider>
	);
}