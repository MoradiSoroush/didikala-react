import react,{useEffect,useState} from "react"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import { CssBaseline } from "@mui/material";
import Header from "./Components/Header/Header";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
// import "./main.css"

function App() {

  let router = useRoutes(routes)

    const [isScrolled, setIsScrolled] = useState(false);
  
  
    useEffect(() => {
  
      const HandleScroll =() => {
        if(window.scrollY > 50){
          setIsScrolled(true)
        }else {
          setIsScrolled(false)
        }
      }
  
      window.addEventListener("scroll",HandleScroll)
  
      return() => {
        window.removeEventListener("scroll",HandleScroll)
      }
  
    },[])

  return (
    <>
      <ThemeProvider theme={createTheme()}>
        <CssBaseline />
        <div className="App">
          <div className="side-bar" >

          </div>
          <div className="main-wrapper">
            <Header />
            <div className={isScrolled ? "main-content-wrapper scrolled" : "main-content-wrapper"}>
              {router}
            </div>
            
          </div>

        </div>

      </ThemeProvider>
    </>

  );
}

export default App;
