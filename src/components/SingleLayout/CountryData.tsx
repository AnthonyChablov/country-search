import React,{useEffect} from 'react';
import { CountryInfo } from '../../models/country';
import Attribute from './Attribute';


const CountryData: React.FC<{ data: CountryInfo }> = ({ data }) => {

  const { name, region, subregion, capital, tld, currencies, languages, population } = data;

  const extractedLanguages: string[] = [];
  for (const key in languages) {
    if (languages.hasOwnProperty(key)) {
      extractedLanguages.push(languages[key]);
    }
  }

  const extractedCurrencies: string[] = [];
  for (const key in currencies) {
    if (currencies.hasOwnProperty(key)) {
      extractedCurrencies.push(currencies[key].name);
    }
  }

  const extractedNativeName: string[] = [];
  for (const key in name.nativeName) {
    if (name.nativeName.hasOwnProperty(key)) {
      extractedNativeName.push(name.nativeName[key].official);
    }
  }

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

  useEffect(()=>{
    console.log(data)
  },[data])

  return (
    <>
      {countryData.map((item, index) => (
        <Attribute key={index} title={item.title} description={item.data} />
      ))}
    </>
  );
};

export default CountryData;
