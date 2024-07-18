import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
// import "../../../public/icons/logo.png"
function Logo() {
	return (
		<Link to="/">
			<img
				src=" ../../../public/icons/logo.png"
				alt="WorldWise logo"
				className={styles.logo}
			/>
		</Link>
	);
}

export default Logo;
