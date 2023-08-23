import { motion } from 'framer-motion';
import Text from './Text';
import { Link } from 'react-router-dom';

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
    <motion.div variants={cardVariants} initial="hidden" animate="visible" className="w-full">
      <Link to={link}>
        <motion.div
          className="bg-gray-100 shadow-md dark:bg-gray-700 rounded-md overflow-hidden min-w-[10rem] max-w-[17rem]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* flag */}
          <div className="h-[7.6rem] bg-slate-500 overflow-hidden flex items-center justify-center">
            <div className="aspect-w-16 aspect-h-10 h-94">
              <motion.img
                className="object-contain w-50"
                src={flag}
                alt="country flag"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
          {/* description */}
          <div className="px-8 pt-4 pb-6 md:pb-10">
            <motion.h1
              className="text-lg font-semibold mb-3 truncate"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {country}
            </motion.h1>
            <div>
              {data.map((elem, i: number) => (
                <Text key={i} animationValue={i} category={elem.category} value={elem.value} />
              ))}
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default Card;
