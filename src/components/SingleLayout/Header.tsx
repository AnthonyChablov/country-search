
interface ITitle {
    title: string
}

const Header = ({title}:ITitle) => {
  return (
    <div className=''>
        {title}
    </div>
  )
}

export default Header;