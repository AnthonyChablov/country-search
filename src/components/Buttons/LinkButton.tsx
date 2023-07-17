import Icon from "../Icon/Icon"
import {Link} from 'react-router-dom';

interface ILinkButton{
    link: string,
    title :string,
    displayIcon: boolean
}

const LinkButton = ({link,title,displayIcon}:ILinkButton) => {
  return (
    <Link to={link}>
        <div className="inline-block">
            {/* Icon */}
            <div className="flex items-center justify-center px-6 py-1.5 shadow-lg bg-slate-600 w-24">
                {displayIcon && <Icon type={'back'} size={18} color="white"/>}
                <p className={`font-light ${displayIcon ? 'ml-3' : ''}`}>{title}</p>
            </div>
        </div>
    </Link>
  )
}

export default LinkButton