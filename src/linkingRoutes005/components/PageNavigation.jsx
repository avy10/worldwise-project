import { Link, NavLink } from "react-router-dom";
import styles from "./PageNavigation.module.css";
// all the css class names written in the css module file gets exported into a single object
// here we write that object variable as styles

export default function PageNavigation() {
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<NavLink to={"/"}>Home</NavLink>
				</li>
				<li>
					<NavLink to={"/product"}>Product</NavLink>
				</li>
				<li>
					<NavLink to={"/pricing"}>Pricing</NavLink>
				</li>
			</ul>
		</nav>
	);
}
