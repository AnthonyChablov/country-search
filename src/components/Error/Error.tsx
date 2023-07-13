import { motion } from "framer-motion"

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        className="bg-white rounded-lg p-8 text-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Error Occurred</h2>
        <p className="text-gray-600">Sorry, an error occurred while fetching the data.</p>
      </motion.div>
    </div>
  )
}

export default Error