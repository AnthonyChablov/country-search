import Icon from "../Icon/Icon";
import Container from "../Container/Container";
import { useAppStore } from "../../store/app/appstore";
import {Link} from 'react-router-dom';

const Nav = () => {

  const theme = useAppStore(state => state.theme);
  const setTheme = useAppStore(state => state.setTheme);

  function onClickDarkModeToggle(){
    setTheme(theme === 'dark' ? 'light' : 'dark');
    localStorage.setItem("theme-mode-ac", theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <div className="bg-white dark:bg-gray-700 dark:text-white shadow-2xl"> 
        <Container>
            <div className="flex flex-row justify-between items-center ">
                <Link to={'/'}><p className="font-semibold text-sm sm:text-lg">Where in the world?</p></Link>
                <div className=" flex justify-center items-center cursor-pointer"
                  onClick={()=>onClickDarkModeToggle()}
                >
                  <Icon 
                    type={theme==='light' ? 'moon' : 'moonFill'} 
                    size={18}
                    color={theme==='light' ? 'black' : 'white'}
                  />
                  <p className="ml-3 text-sm sm:text-lg">Dark Mode</p>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Nav