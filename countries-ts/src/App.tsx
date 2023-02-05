import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { CountryType } from "./types";
import Country from "./components/Country";
import Loading from "./components/Loading";

function App() {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [loading, setLoading] = useState(true);

  const getCountries = async () => {
    const { data } = await axios.get<CountryType[]>("https://restcountries.com/v2/all");
    setCountries(data);
    setLoading(false);
  };

  useEffect(() => {
    getCountries();
  }, []);

  console.log(countries);
  return (
    <div>
      <Loading loading={loading}>
        {countries.map((item) => (
          <Country country={item} key={item.name} />
        ))}
      </Loading>
    </div>
  );
}

export default App;
