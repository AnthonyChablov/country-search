import Icon from "../Icon/Icon"
import {Link} from 'react-router-dom';

interface IBack{
    link: string,
}

const Back = ({link}:IBack) => {
  return (
    <Link to={link}>
        <div className="inline-block">
            {/* Icon */}
            
            <div className="flex items-center justify-center px-6 py-1.5 shadow-lg bg-slate-600">
                <Icon type={'back'} size={20} color="white"/>
                <p className="ml-3 font-light">Back</p>
            </div>
        </div>
    </Link>
  )
}

export default Back