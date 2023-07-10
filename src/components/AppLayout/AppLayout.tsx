import {useEffect} from 'react';
import Container from "../Container/Container";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";
import { getAll } from '../../api/restCountries';
import Card from '../Card/Card';
import { useDataStore } from '../../store/app/data/dataStore';


const AppLayout = () => {

  
  const setData = useDataStore(state => state.setData);

  
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const data = await getAll();
        // Process the data here
        setData(data);
        console.log(data);
      } catch (error) {
        // Handle any errors that occur during the request
        console.log(error);
      }
    };

    fetchData().catch((error) => {
      // Handle any uncaught errors here
      console.log(error);
    });

  },[]);
  
  return (
    <div className='h-screen dark:bg-slate-800 bg-gray-100 dark:text-white'>
        <Container>
            <SearchBar/>
            <div className="my-5">
              <Filter/>
            </div>
            {/* Display country data */}
            <Card 
              flag='123'
              country='Germany'
              population='81,770,900'
              region='Europe'
              capital='Berlin'
            />
        </Container>
    </div>
  )
}

export default AppLayout