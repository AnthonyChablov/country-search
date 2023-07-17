
interface ISubHeader{
  title : string
}

const SubHeader = ({title}:ISubHeader) => {
  return (
    <div className='text-xl font-bold mt-10 mb-5'>
      {`${title}:`}
    </div>
  )
}

export default SubHeader;