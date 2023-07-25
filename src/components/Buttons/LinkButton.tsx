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
        <div className="inline-block ">
            {/* Icon */}
            <div className={`flex items-center justify-center  py-1.5 shadow-xl bg-slate-50 dark:bg-slate-600 w-32 rounded-md 
              ${displayIcon ? 'px-16' : 'px-6'}
            `}>
                {displayIcon && <Icon type={'back'} size={18} />}
                <p className={`font-medium  ${displayIcon ? 'ml-3  ' : 'text-sm truncate'}`}>{title}</p>
            </div>
        </div>
    </Link>
  )
}

export default LinkButton