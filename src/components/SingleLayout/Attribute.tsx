
interface IAttribute {
    title: string,
    description: string
}

const Attribute = ({title, description}:IAttribute) => {
  return (
    <div className='flex'>
        <p className="font-semibold text-md">{`${title}:`}</p>
        <p className="ml-2 font-normal  text-md">{description}</p>
    </div>
  )
}

export default Attribute