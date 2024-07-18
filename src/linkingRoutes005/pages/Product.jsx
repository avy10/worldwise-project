import { Link } from "react-router-dom";
import PageNavigation from "../components/PageNavigation";

export default function Product() {
	return (
		<div>
			<PageNavigation />
			<h1>I AM ON PRODUCTS PAGE</h1>
			<Link to="/">Go Home</Link>
		</div>
	);
}
