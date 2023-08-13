import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../../contexts/CitiesContext";


function CountryList() {
  const { cities, isLoading } = useCities();
  
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add Your first country by clicking on a country on the map." />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
