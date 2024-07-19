import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
export default function Map() {
	const [searchParams, setSearchParams] = useSearchParams();
	const lat = searchParams.get("lat");
	const long = searchParams.get("long");
	searchParams.forEach((value, key, arr) => {
		console.log("value", value);
		console.log("key", key);
		console.log("array", arr);
	});

	return (
		<div className={styles.mapContainer}>
			<h1>Map</h1>
			<h1>
				Position : {lat} , {long}
			</h1>
			<button
				onClick={() =>
					setSearchParams({ lat: 23, long: 55, name: "abhishek" })
				}
			>
				update search params
			</button>
		</div>
	);
}
