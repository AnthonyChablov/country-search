
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        className="bg-white rounded-full p-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, yoyo: Infinity }}
      >
        <div className="w-16 h-16 bg-blue-500 rounded-full" />
      </motion.div>
    </div>
  );
};

export default Loading;
