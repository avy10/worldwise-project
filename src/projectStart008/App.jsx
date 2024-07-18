import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import PageNavigation from "./components/Navigation/PageNavigation/PageNavigation.jsx";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import Homepage from "./pages/HomePage.jsx";
import Login from "./pages/Login.jsx";

function App() {
	return (
		<BrowserRouter>
			{/* <PageNavigation /> */}
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="product" element={<Product />} />
				<Route path="pricing" element={<Pricing />} />
				<Route path="app" element={<AppLayout />} />
				<Route path="login" element={<Login />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
