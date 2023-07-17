import React, { useEffect }  from 'react';
import AppLayout from "./components/AppLayout/AppLayout";
import { useAppStore } from "./store/app/appstore";
import {createBrowserRouter, RouterProvider, Outlet } from'react-router-dom';
import { ErrorBoundary } from "react-error-boundary";
import Loading from './components/Loading/Loading';
import RouteNotFound from './components/RouteNotFound/RouteNotFound';
import GlobalError from './components/GlobalError/GlobalError';
import SingleLayout from './components/SingleLayout/SingleLayout';

const ErrorBoundaryLayout = () => ( // Error boundary for catching errors in our app 
  <ErrorBoundary FallbackComponent={GlobalError}>
    <Outlet />
  </ErrorBoundary>
);

function App() {

  /* State */
  const theme = useAppStore(state => state.theme);
  const setTheme = useAppStore(state => state.setTheme);

  const router = createBrowserRouter([
    {
      element: <ErrorBoundaryLayout />,
      children:[
        {
          path: "/",
          element: <AppLayout />,
        },
        {
          path: "/:country",
          element: <SingleLayout />,
        },
        {
          path: "*", 
          element: <RouteNotFound />,
        },
      ]
    }
  ]); 

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
        <React.Suspense fallback={<Loading/>}>
          <RouterProvider router={router} />
        </React.Suspense>      
    </>
  )
}

export default App;
