import styles from "./SideBar.module.css";
import Logo from "../Navigation/Logo/Logo";
import AppNavigation from "../Navigation/AppNavigation/AppNavigation";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
export default function SideBar() {
	return (
		<div className={styles.sidebar}>
			<Logo />

			<AppNavigation />
			<Outlet />
			<Footer />
		</div>
	);
}
