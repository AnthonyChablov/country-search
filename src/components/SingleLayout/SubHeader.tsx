
interface ISubHeader{
  title : string
}

const SubHeader = ({title}:ISubHeader) => {
  return (
    <div className='text-lg font-semibold mt-10 mb-5 text-left xs:text-center lg:text-left'>
      {`${title}:`}
    </div>
  )
}

export default SubHeader;