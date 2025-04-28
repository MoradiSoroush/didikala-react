import react from "react"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import { CssBaseline } from "@mui/material";
import Header from "./Components/Header/Header";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
// import "./main.css"

function App() {

  let router = useRoutes(routes)


  return (
    <>
      <ThemeProvider theme={createTheme()}>
        <CssBaseline />
        <div className="App">
          <div className="side-bar" >

          </div>
          <div className="main-wrapper">
            <Header />
            {router}
          </div>

        </div>

      </ThemeProvider>
    </>

  );
}

export default App;
