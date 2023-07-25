
interface ISubHeader{
  title : string
}

const SubHeader = ({title}:ISubHeader) => {
  return (
    <div className='text-md font-semibold mt-10 mb-5'>
      {`${title}:`}
    </div>
  )
}

export default SubHeader;