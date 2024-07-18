import { Link } from "react-router-dom";
import PageNavigation from "../components/PageNavigation";
import AppNavigation from "../components/AppNavigation";

export default function HomePage() {
	return (
		<div>
			<PageNavigation />
			<AppNavigation />
			<h1 className="test">I AM ON HOMEPAGE</h1>
			<Link to="/product">Product</Link>
			<br />
			<Link to="/app">App</Link>
		</div>
	);
}
