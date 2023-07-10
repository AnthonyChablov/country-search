import { useEffect } from "react";
import Nav from "./components/Nav/Nav";
import AppLayout from "./components/AppLayout/AppLayout";
import { useAppStore } from "./store/app/appstore";

function App() {

  /* State */
  const theme = useAppStore(state => state.theme);
  const setTheme = useAppStore(state => state.setTheme);

  /* Darkmode */
  useEffect(() => {
    const themeMode = localStorage.getItem("theme-mode-ac");

    if (theme === 'dark' || themeMode === 'dark' ) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    }else{
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, [theme]);

  return (
    <>
      <Nav/>
      <AppLayout/>
    </>
  )
}

export default App;
