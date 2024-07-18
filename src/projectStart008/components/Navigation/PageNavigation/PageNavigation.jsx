import { Link, NavLink } from "react-router-dom";
import styles from "./PageNavigation.module.css";
// all the css class names written in the css module file gets exported into a single object
// here we write that object variable as styles
import Logo from "../Logo/Logo";
export default function PageNavigation() {
	return (
		<nav className={styles.nav}>
			<Logo />
			<ul>
				<li>
					<NavLink to={"/product"}>Product</NavLink>
				</li>
				<li>
					<NavLink to={"/pricing"}>Pricing</NavLink>
				</li>
				<li>
					<NavLink to={"/login"} className={styles.ctaLink}>
						Login
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
