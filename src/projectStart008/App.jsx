import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import PageNavigation from "./components/Navigation/PageNavigation/PageNavigation.jsx";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import Homepage from "./pages/HomePage.jsx";
import Login from "./pages/Login.jsx";
import SideBar from "./components/SideBar/SideBar.jsx";

function App() {
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
					<Route index element={<p>DEFAULT CHILD ROUTE</p>} />
					<Route path="cities" element={<p>LIST OF CITIES</p>} />
					<Route
						path="countries"
						element={<p>LIST OF COUNTRIES</p>}
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
