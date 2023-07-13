import React, { useEffect } from 'react';
import useSWR from 'swr';
import Container from "../Container/Container";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";
import { getAll } from '../../api/restCountries';
import Card from '../Card/Card';
import { useDataStore } from '../../store/app/data/dataStore';
import { CountryInfo } from '../../models/country';

const AppLayout: React.FC = () => {
  const data = useDataStore((state) => state.data);
  const setData = useDataStore((state) => state.setData);
  const filter = useDataStore((state) => state.filter);
  const search = useDataStore((state) => state.search);

  // Fetch Data
  const { data: apiData, isError, isLoading } = useSWR<CountryInfo[]>('/api/data', getAll);

  useEffect(() => {
    // Update data state when apiData changes
    if (apiData) {
      setData(apiData);
    }
  }, [apiData, setData]);

  const filteredData = Array.isArray(data) ? filterData(data, search, filter) : [];

  return (
    <div className="h-fit dark:bg-slate-800 bg-gray-100 dark:text-white">
      <Container>
        <div className="md:flex md:justify-between md:gap-8 mb-12">
          <div className="md:w-5/12">
            {/* Search bar component */}
            <SearchBar />
          </div>
          <div className="mt-10 md:mt-0 md:col-span-1">
            <div className="mt-5 md:mt-0 w-10/12">
              {/* Filter component */}
              <Filter />
            </div>
          </div>
        </div>
        {/* Display country data */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
          {isLoading ? (
            <div>Loading...</div> // Render a loading indicator while fetching data
          ) : isError ? (
            <div>Error occurred while fetching data.</div> // Render an error message
          ) : (
            filteredData?.map((country, i: number) => (
              <Card
                key={i}
                link="123"
                flag={country.flags.png}
                country={country.name.common}
                population={country.population.toString()}
                region={country.region}
                capital={country.capital}
              />
            ))
          )}
        </div>
      </Container>
    </div>
  );
};

const filterData = (data: CountryInfo[], search: string, filter: string): CountryInfo[] => {
  return data?.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase()) &&
    (filter === '' || country.region === filter)
  );
};

export default AppLayout;
