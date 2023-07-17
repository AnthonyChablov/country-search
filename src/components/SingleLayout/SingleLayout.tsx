import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { CountryInfo } from '../../models/country';
import { getOne } from '../../api/restCountries';
import { useParams } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Container from '../Container/Container';
import LinkButton from '../Buttons/LinkButton';
import FlagImage from '../Image/FlagImage';
import Header from './Header';
import SubHeader from './SubHeader';
import CountryData from './CountryData';

const SingleLayout: React.FC = () => {
  const { country: code } = useParams<{ country: string }>();

  const { data, error, isValidating } = useSWR<CountryInfo[], Error>(
    `/api/singleData/${code ?? ''}`,
    () => getOne(code ?? ''),
    { revalidateOnFocus: false }
  );
  
  const [borderCountries, setBorderCountries] = useState<string[]>([]);

  useEffect(() => {
    if (data && code !== '') {
      const { borders } = data[0];
      setBorderCountries(borders);
    }
  }, [data, code]);

  return (
    <>
      <Nav />
      <div className="min-h-screen max-h-full dark:bg-slate-800 bg-gray-100 dark:text-white">
        <Container>
          <LinkButton link="/" title="Back" displayIcon={true}/>
          <div className="">
            <div className="mt-10">
              {error && <p>Error: Failed to fetch country data.</p>}
              {isValidating || !data ? (
                <div className="h-screen">
                  <p>Loading...</p>
                </div>
              ) : (
                <div className='lg:flex'>
                  <FlagImage src={data[0]?.flags?.png} alt={data[0]?.flags?.alt} />
                  <div className="">
                    <div className="mt-10 mb-5">
                        <Header title={data[0]?.name?.common} />
                    </div>
                    <div className="lg:flex">
                        
                        {/* Data */}
                        <div className="space-y-3">
                            <CountryData data={data[0]} startSlice={0} endSlice={5}/>
                        </div>
                        <div className="mt-10 space-y-3">
                            <CountryData data={data[0]} startSlice={5} endSlice={data[0].length}/>
                        </div>
                    </div>
                    {/* Border Countries */}
                    <div className="mt-5">
                        <SubHeader title="Border Countries" />
                        <ul className=" grid grid-cols-2 xxs:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                        {borderCountries.map((country, i) => (
                            <li key={i}>
                            <LinkButton link={`/${country}`} title={country} displayIcon={false} />
                            </li>
                        ))}
                        </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SingleLayout;
