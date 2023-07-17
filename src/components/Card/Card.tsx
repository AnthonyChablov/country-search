import { motion } from 'framer-motion';
import Text from './Text';
import {Link} from 'react-router-dom'


interface ICard {
  flag: string;
  link: string;
  country: string;
  population: string;
  region: string;
  capital: string[] | string;
}

const Card = ({ flag, link, country, population, region, capital }: ICard) => {
  const data = [
    {
      category: 'Population: ',
      value: population,
    },
    {
      category: 'Region: ',
      value: region,
    },
    {
      category: 'Capital: ',
      value: capital,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div variants={cardVariants} initial="hidden" animate="visible">
      <Link to={link}> 
        <motion.div
          className="w-full bg-white shadow-md dark:bg-gray-700 rounded-md overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* flag */}
          <div className="h-32 bg-slate-500 flex items-center justify-center">
            <div className="aspect-w-16 aspect-h-9 max-h-full">
              <motion.img
                className="object-contain h-full"
                src={flag}
                alt="country flag"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
          {/* description */}
          <div className="px-8 pt-4 pb-10">
            <motion.h1
              className="text-lg font-semibold mb-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {country}
            </motion.h1>
            <div className="">
              {data.map((elem, i: number) => {
                return (
                  <Text
                    key={i}
                    animationValue = {i}
                    category={elem.category}
                    value={elem.value}
                  />
                );
              })}
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default Card;
