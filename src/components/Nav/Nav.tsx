import Icon from "../Icon/Icon";
import Container from "../Container/Container";
import { useAppStore } from "../../store/app/appstore";

const Nav = () => {

  const theme = useAppStore(state => state.theme);
  const setTheme = useAppStore(state => state.setTheme);

  function onClickDarkModeToggle(){
    setTheme(theme === 'dark' ? 'light' : 'dark');
    localStorage.setItem("theme-mode-ac", theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <div className="bg-white shadow-md dark:bg-gray-700 dark:text-white"> 
        <Container>
            <div className="flex justify-between items-center ">
                <p className="font-semibold">Where in the world?</p>
                <div className=" flex justify-center items-center cursor-pointer"
                  onClick={()=>onClickDarkModeToggle()}
                >
                  <Icon 
                    type={theme==='light' ? 'moon' : 'moonFill'} 
                    size={18}
                    color={theme==='light' ? 'black' : 'white'}
                  />
                  <p className="ml-3">Dark Mode</p>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Nav