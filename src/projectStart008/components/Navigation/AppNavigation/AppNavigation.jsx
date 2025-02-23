import { NavLink } from "react-router-dom";
import styles from "./AppNavigation.module.css";
export default function AppNavigation() {
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<NavLink to={"cities"}>Cities</NavLink>
				</li>
				<li>
					<NavLink to={"countries"}>Countries</NavLink>
				</li>
				<li>
					<NavLink to={"form"}>Form</NavLink>
				</li>
			</ul>
		</nav>
	);
}
