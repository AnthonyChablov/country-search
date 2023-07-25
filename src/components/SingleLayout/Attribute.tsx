
interface IAttribute {
    title: string,
    description: string
}

const Attribute = ({title, description}:IAttribute) => {
  return (
    <div className='flex'>
        <p className="font-semibold text-sm">{`${title}:`}</p>
        <p className="ml-2 font-normal  text-sm">{description}</p>
    </div>
  )
}

export default Attribute