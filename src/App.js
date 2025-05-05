import react, { useEffect, useState } from "react"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import { CssBaseline } from "@mui/material";
import Header from "./Components/Header/Header";
import { useNavigate, useRoutes } from "react-router-dom";
import routes from "./routes";
import Footer from "./Components/Footer/Footer";
import useLocalStorage from "./Hooks/useLocalStorage";
import useAuthToken from "./Hooks/useAuthToken";
import LoginPage from "./Pages/Login/LoginPage";



function App() {
  const {authToken,isAuthenticated} = useAuthToken()
  const [isLogin, setIsLogin] = useState(!!authToken)

  let router = useRoutes(routes)

  const [isScrolled, setIsScrolled] = useState(false);



  
  let autUserToken = localStorage.getItem("token")
console.log(autUserToken)





useEffect (() => {
setIsLogin(!!authToken)
console.log(isLogin)
console.log(isAuthenticated)
},[authToken,isLogin])




  useEffect(() => {

    const HandleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", HandleScroll)

    return () => {
      window.removeEventListener("scroll", HandleScroll)
    }

  }, [])

  return (

    <ThemeProvider theme={createTheme()}>
      <CssBaseline />

      <div className="App">

        <container className="container">

          {!isLogin ?
            <div className="main-wrapper">
              <div className={isScrolled ? "main-content-wrapper scrolled" : "main-content-wrapper"}>
                {router}
              </div>
              <Footer />
            </div>
            :
            <>
              <div className="side-bar" >
              </div>
              <div className="main-wrapper">
                <Header />
                <div className={isScrolled ? "main-content-wrapper scrolled" : "main-content-wrapper"}>
                  {router}
                </div>
                <Footer />
              </div>
            </>
          }
       </container>

      </div>

      :






    </ThemeProvider>


  );
}

export default App;
