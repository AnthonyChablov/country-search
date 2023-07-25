
interface ISubHeader{
  title : string
}

const SubHeader = ({title}:ISubHeader) => {
  return (
    <div className='text-lg font-regular mt-10 mb-5'>
      {`${title}:`}
    </div>
  )
}

export default SubHeader;