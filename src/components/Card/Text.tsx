import { motion } from "framer-motion"

interface IText{
    category : string,
    animationValue : number,
    value : string | string[]
}

const Text = ({category,animationValue, value }:IText) => {
  return (
    <motion.span className=" flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: (animationValue + 1) * 0.1 }}
    >
        <p className="mr-2">{category}</p> 
        <p className="text-slate-500 dark:text-slate-300 truncate">{value}</p>
    </motion.span>
  )
}

export default Text