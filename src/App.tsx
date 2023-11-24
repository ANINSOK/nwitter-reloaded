import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
// import reset from "path-to-reset-file"; 

import Layout from "./components/layout"
import Home from "./routes/home"; // Import the Home component
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account";
import reset from 'styled-reset'
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loading-screen";
import { auth } from "./firebase";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  { path: "/create-account", element: <CreateAccount /> }
])

const GrobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  ${reset};
  body {
    background-color: black;
    color:white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

function App() {
  const [isLoading, setLoading] = useState(true);
  const init = async () => {
    await auth.authStateReady();
    setLoading(false);
  }
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <GrobalStyles />
      {isLoading ? <LoadingScreen/> : <RouterProvider router={router} />}


    </>
  )
}

export default App
