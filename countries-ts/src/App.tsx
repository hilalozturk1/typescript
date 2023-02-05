import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { CountryType } from "./types";

function App() {
  const [countries, setCountries] = useState<CountryType[]>([]);

  const getCountries = async () => {
    const { data } = await axios.get<CountryType[]>("https://restcountries.com/v2/all");
    setCountries(data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  console.log(countries);
  return (
    <div>
      {countries.map((item) => (
        <p>{item.name} - {item.capital}</p>
      ))}
    </div>
  );
}

export default App;
