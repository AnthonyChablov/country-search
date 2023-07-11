
interface IText{
    category : string,
    value : string
}

const Text = ({category, value }:IText) => {
  return (
    <span className=" flex">
        <p className="mr-2">{category}</p> 
        <p className="text-slate-400">{value}</p>
    </span>
  )
}

export default Text