import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { motion } from 'framer-motion';
import Container from "../Container/Container";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";
import { getAll } from '../../api/restCountries';
import Card from '../Card/Card';
import { useDataStore } from '../../store/app/data/dataStore';
import { CountryInfo } from '../../models/country';

const AppLayout: React.FC = () => {

  // State
  const data = useDataStore((state) => state.data);
  const setData = useDataStore((state) => state.setData);
  const filter = useDataStore((state) => state.filter);
  const search = useDataStore((state) => state.search);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch Data
  const { data: apiData, error, isLoading } = useSWR<CountryInfo[], Error>('/api/data', getAll);

  // Filter Data
  const filteredData = Array.isArray(data) ? filterData(data, search, filter) : [];

  // Pagination
  const countriesPerPage = 10;
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredData?.slice(indexOfFirstCountry, indexOfLastCountry);
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    // Update data state when apiData changes
    if (apiData) {
      setData(apiData);
    }
  }, [apiData, setData]);

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
        <motion.div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {isLoading ? (
            <div>Loading...</div> // Render a loading indicator while fetching data
          ) : error ? (
            <div>Error occurred while fetching data.</div> // Render an error message
          ) : (
            currentCountries?.map((country, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card
                  link="123"
                  flag={country.flags.png}
                  country={country.name.common}
                  population={country.population.toString()}
                  region={country.region}
                  capital={country.capital}
                />
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Pagination */}
        {filteredData && (
          <div className="flex justify-center mt-6">
            {Array.from(Array(Math.ceil(filteredData.length / countriesPerPage)).keys()).map((pageNumber) => (
              <button
                key={pageNumber}
                className={`mx-1 px-3 py-2 rounded-md ${
                  currentPage === pageNumber + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
                }`}
                onClick={() => paginate(pageNumber + 1)}
              >
                {pageNumber + 1}
              </button>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

const filterData = (data: CountryInfo[], search: string, filter: string): CountryInfo[] => {
  return data?.filter(
    (country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase()) &&
      (filter === '' || country.region === filter)
  );
};

export default AppLayout;
