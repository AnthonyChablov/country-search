import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { motion } from 'framer-motion';
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
import { singleLayoutVariant } from '../../variants/variant';
import { getCountryNameByCode } from '../../utils/getCountryNameByCode';

const SingleLayout: React.FC = () => {
  const { country: code } = useParams<{ country: string }>();

  const { data, error, isValidating } = useSWR<CountryInfo[] | undefined, Error>(
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

  useEffect(()=>{
    console.log(data);
  }, [data]);

  return (
    <>
      <Nav />
      <div className="min-h-screen max-h-full dark:bg-slate-800 bg-gray-100 dark:text-white">
        <Container>
          <LinkButton link="/" title="Back" displayIcon={true} />
          <div className="">
            <div className="mt-10">
              {error && <p>Error: Failed to fetch country data.</p>}
              {isValidating || !data ? (
                <div className="h-screen">
                  <p>Loading...</p>
                </div>
              ) : (
                <div className="lg:flex mt-4">
                  {/* Flag */}
                    <motion.div 
                        className="flex items-center justify-center lg:w-6/12 lg:justify-start lg:items-start"
                        variants={singleLayoutVariant}
                        initial="hidden"
                        animate="visible"
                    >
                        <FlagImage src={data[0]?.flags?.png} alt={data[0]?.flags?.alt} />
                    </motion.div>
                    {/* Info */}
                    <motion.div 
                        className="lg:w-1/2 flex flex-col items-center lg:flex-none lg:items-baseline"
                        variants={singleLayoutVariant}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="mt-10 lg:mt-2 mb-5">
                          <Header title={data[0]?.name?.common} />
                        </div>
                        <div className="md:flex">
                        {/* Data */}
                        <div className="md:w-1/2 mr-9 ">
                            <div className="space-y-1">
                              <CountryData data={data[0]} startSlice={0} endSlice={5}/>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            {
                              data && (
                                <div className="mt-10 lg:mt-0 space-y-1">
                                    <CountryData data={data[0]} startSlice={5} endSlice={data[0]?.length} />
                                </div>
                              )
                            }
                        </div>
                        </div>
                        {/* Border Countries */}
                        <div className="mt-5 ">
                        <SubHeader title="Border Countries" />
                        {borderCountries && borderCountries.length > 0 ? (
                            <ul className="mt-10 grid grid-cols-2 xxs:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 gap-4">
                              {borderCountries?.map((country, i) => (
                                <li key={i}>
                                  <LinkButton 
                                    link={`/${country}`} 
                                    title={getCountryNameByCode(country)} 
                                    displayIcon={false} 
                                  />
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className='text-sm'>No border countries found.</p>
                          )}
                        </div>
                    </motion.div>
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
