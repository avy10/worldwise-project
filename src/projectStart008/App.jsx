import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import { CITIES } from "../../public/cities.js";

import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import PageNavigation from "./components/Navigation/PageNavigation/PageNavigation.jsx";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import Homepage from "./pages/HomePage.jsx";
import Login from "./pages/Login.jsx";
import SideBar from "./components/SideBar/SideBar.jsx";
import CityList from "./components/CityCountriesList/CityList.jsx";

import CountryList from "./components/CityCountriesList/CountryList/CountryList.jsx";

function App() {
	const [cities, setCities] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setCities(CITIES);
			setIsLoading(false);
		}, 2500);
	}, []);

	return (
		<BrowserRouter>
			{/* <PageNavigation /> */}
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="product" element={<Product />} />
				<Route path="pricing" element={<Pricing />} />
				<Route path="app" element={<AppLayout />}>
					{/* an index route is going to be the default child route when none of the routes listed below matches
					 */}
					<Route
						index
						element={
							<CityList cities={cities} isLoading={isLoading} />
						}
					/>
					<Route
						path="cities"
						element={
							<CityList cities={cities} isLoading={isLoading} />
						}
					/>
					<Route
						path="countries"
						element={
							<CountryList
								cities={cities}
								isLoading={isLoading}
							/>
						}
					/>
					<Route path="form" element={<p>FORM</p>} />
				</Route>
				<Route path="login" element={<Login />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
