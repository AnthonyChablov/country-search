import React from 'react';
import { CountryInfo } from '../../models/country';
import Attribute from './Attribute';

interface ICountryData{
    data: CountryInfo,
    startSlice: number,
    endSlice : number
}

const CountryData: React.FC<ICountryData> = ({ data, startSlice , endSlice}:ICountryData) => {

  const { name, region, subregion, capital, tld, currencies, languages, population } = data;

  const extractedLanguages: string[] = Object.values(languages);
  const extractedCurrencies: string[] = Object.values(currencies).map((currency) => currency.name);
  const extractedNativeName: string[] = Object.values(name.nativeName).map((nativeName) => nativeName.official);


  const countryData = [
    {
      title: "Native Name",
      data: extractedNativeName.slice(0,1).join(', ') || 'N/A'
    },
    {
      title: "Population",
      data: population.toLocaleString() || 'N/A'
    },
    {
      title: "Region",
      data: region || 'N/A'
    },
    {
      title: "Sub Region",
      data: subregion || 'N/A'
    },
    {
      title: "Capital",
      data: capital?.[0] || 'N/A'
    },
    {
      title: "Top Level Domain",
      data: tld?.[0] || 'N/A'
    },
    {
      title: "Currencies",
      data: extractedCurrencies.join(', ') || 'N/A'
    },
    {
      title: "Languages",
      data: extractedLanguages.join(', ') || 'N/A'
    }
  ];

  return (
    <>
      {countryData.slice(startSlice, endSlice).map((item, index) => (
        <Attribute key={index} title={item.title} description={item.data} />
      ))}
    </>
  );
};

export default CountryData;
