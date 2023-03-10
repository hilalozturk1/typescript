import React, { FunctionComponent } from "react";
import { CountryType } from "../types";

interface ICountryProps {
  country: CountryType;
}

const Country: FunctionComponent<ICountryProps> = ({ country }) => {
  return (
    <>
      <p>
        {country.name} - {country.capital}
      </p>
    </>
  );
};

export default Country;
