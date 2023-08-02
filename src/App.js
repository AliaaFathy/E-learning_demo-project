import NavBar from "./components/NavBar";
import Intro from "./components/HomepageComponents/Intro";
import HomePage from "./Pages/HomePage";
import './index.css'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles';
import {Route, Routes} from "react-router-dom";
import Courses from "./Pages/Courses";
import About from "./Pages/About";
import Footer from "./components/Footer";


function App(){
    const THEME = createTheme({
        typography: {
            "fontFamily": "Quicksand",
            "fontSize": 14,
        }
    });
    return(<ThemeProvider theme={THEME}>
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer></Footer>
        </ThemeProvider>
    )
}
export default App