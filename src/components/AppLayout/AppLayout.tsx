import {useEffect} from 'react';
import useSWR from 'swr';
import Container from "../Container/Container";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";
import { getAll } from '../../api/restCountries';
import Card from '../Card/Card';
import { CountryInfo } from '../../models/country';

const AppLayout = () => {

  /* const data = useDataStore(state => state.data);
  const setData = useDataStore(state => state.setData);
   */

  /* Fetch Data */
  const { data, isError, isLoading } = useSWR('/api/data', getAll)

  useEffect(()=>{
    console.log(data);
  },[data]); 

  
  return (
    <div className='h-fit dark:bg-slate-800 bg-gray-100 dark:text-white'>
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
            {/* Display country data */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
              {isLoading ? (
                <div>Loading...</div> // Render a loading indicator while fetching data
              ) : isError ? (
                <div>Error occurred while fetching data.</div> // Render an error message
              ) : (
                data?.slice(0, 8)?.map((country, i: number) => (
                    <Card
                      key={i}
                      link=' '
                      flag={country.flags.png}
                      country={country.name.common}
                      population={country.population.toString()}
                      region={country.region}
                      capital={country.capital}
                    />
                  )
                )
              )}
            </div>
        </Container>
    </div>
  )
}

export default AppLayout