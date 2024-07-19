import { useEffect, useState } from "react";
import styles from "./CountryList.module.css";
import Spinner from "../../Spinners/Spinner";
import Message from "../../Message/Message";
import CountryItem from "./CountryItem";
export default function CountryList({ cities, isLoading }) {
	const [countries, setCountries] = useState([]);
	useEffect(() => {
		const newCountries = cities.reduce((accumulator, currentCity) => {
			if (
				!accumulator
					.map((element) => element.city)
					.includes(currentCity.country)
			) {
				return [
					...accumulator,
					{
						country: currentCity.country,
						emoji: currentCity.emoji,
						id: currentCity.id,
					},
				];
			} else {
				return accumulator;
			}
		}, []);
		console.log(newCountries);
		setCountries(newCountries);
	}, [cities]);

	if (isLoading) return <Spinner />;
	return (
		<ul className={styles.countryList}>
			{countries.length > 0 &&
				countries.map((country) => (
					<CountryItem country={country} key={country.id} />
				))}

			{countries.length === 0 && (
				<Message
					message={
						"Add your first Country by clicking on a city on the Map"
					}
				/>
			)}
		</ul>
	);
}
