import {useEffect} from 'react';
import useSWR, { SWRConfiguration } from 'swr';
import { useDataStore } from '../../store/app/data/dataStore';
import { CountryInfo } from '../../models/country';
import { getOne } from '../../api/restCountries';
import {useParams} from 'react-router-dom';
import Nav from '../Nav/Nav';
import Container from '../Container/Container';
import Back from '../Buttons/Back';

const SingleLayout = () => {

    /* State */
    const selected = useDataStore((state)=>state.selected);

    /* Params */
    const params = useParams();
    const code = params.country || '';

    /* Fetcher */
    const fetchCountryData = async (code: string): Promise<CountryInfo[]> => {
        try {
          const res: CountryInfo[] = await getOne(code);
          return res;
        } catch (err) {
          console.log(err);
          throw err;
        }
    };

    const { data, error, isLoading } = useSWR<CountryInfo[], Error>(
        '/api/singleData',
        () => fetchCountryData(code),
        { revalidateOnFocus: false } // Example SWR configuration options
    );

    useEffect(()=>{
        console.log(params);
    },[data]);

  return (
    <>
        <Nav/>
        <div className="h-fit dark:bg-slate-800 bg-gray-100 dark:text-white">
            <Container>
                <Back link='/'/>
                {/* info display */}
                <div className="">
                    
                </div>
            </Container>
        </div>
    </>
  )
}

export default SingleLayout