import styles from "./CityList.module.css";
import Spinner from "../Spinners/Spinner";
import CityItem from "./CityItem";
import Message from "../Message/Message";
export default function CityList({ cities, isLoading }) {
	if (isLoading) return <Spinner />;
	return (
		<ul className={styles.cityList}>
			{cities.length > 0 &&
				cities.map((city) => <CityItem city={city} key={city.id} />)}
			{cities.length === 0 && (
				<Message
					message={
						"Add your first city by clicking on a city on the Map"
					}
				/>
			)}
		</ul>
	);
}
