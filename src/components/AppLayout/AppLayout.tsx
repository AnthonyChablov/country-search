import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { motion } from 'framer-motion';
import Container from '../Container/Container';
import SearchBar from '../SearchBar/SearchBar';
import Filter from '../Filter/Filter';
import { getAll } from '../../api/restCountries';
import Card from '../Card/Card';
import { useDataStore } from '../../store/app/data/dataStore';
import { CountryInfo } from '../../models/country';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import Pagination from './Pagination';
import Nav from '../Nav/Nav';

const AppLayout: React.FC = () => {
  // State
  const data = useDataStore((state) => state.data);
  const setData = useDataStore((state) => state.setData);
  const filter = useDataStore((state) => state.filter);
  const search = useDataStore((state) => state.search);
  const [currentPage, setCurrentPage] = useState(1);
  const setSelected = useDataStore((state)=>state.setSelected);
  
  // Fetch Data
  const { 
    data: apiData, 
    error, 
    isLoading 
  } = useSWR<CountryInfo[], Error>('/api/data', getAll);

  // Filter Data
  const filteredData = Array.isArray(data) 
    ? filterData(data, search, filter) 
    : [];

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
    console.log(apiData);
  }, [apiData, setData]);

  return (
    <>
      <Nav/>
      <div className="h-fit dark:bg-slate-800 bg-gray-100 dark:text-white">
        <Container>
          <div className="md:flex md:justify-between md:gap-8 mb-12">
            <div className="md:w-5/12">
              <SearchBar />
            </div>
            <div className="mt-10 md:mt-0 md:col-span-1">
              <div className="mt-5 md:mt-0 w-10/12">
                <Filter />
              </div>
            </div>
          </div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {isLoading ? (
              <Loading />
            ) : error ? (
              <Error />
            ) : (
              currentCountries?.map((country, i: number) => (
                <motion.div
                  onClick={()=>{
                    setSelected(i);
                  }}
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card
                    link={`/${country.cca2}`}
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
          <Pagination
            filteredData={filteredData}
            currentPage={currentPage}
            countriesPerPage={countriesPerPage}
            paginate={paginate}
          />
        </Container>
      </div>
    </>
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
