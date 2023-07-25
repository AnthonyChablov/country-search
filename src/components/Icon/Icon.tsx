import {BsSunFill, BsMoonFill, BsMoon} from 'react-icons/bs';
import {AiOutlineSearch, AiOutlineArrowLeft} from 'react-icons/ai';
import { BiChevronDown} from 'react-icons/bi';

interface IIcons {
    type : string,
    size: number,
    color?: string,
}

const Icon = ({ type, size, color }:IIcons) => {

    return (
        <div className='text-slate-700 dark:text-slate-50'>
            {
                {
                    moonFill : <BsMoonFill size={size} color={color} /> , 
                    moon : <BsMoon size={size} color={color} /> , 
                    sun : <BsSunFill size={size} color={color}/> ,
                    search: <AiOutlineSearch size={size} color={color}/> ,
                    down : <BiChevronDown size={size} color={color}/>,
                    back : <AiOutlineArrowLeft size={size} />,
                }[type]
            }
        </div>
    )
}

export default Icon;