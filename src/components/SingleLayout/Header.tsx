
interface ITitle {
    title: string
}

const Header = ({title}:ITitle) => {
  return (
    <div className='font-bold text-3xl '>
        {title}
    </div>
  )
}

export default Header;