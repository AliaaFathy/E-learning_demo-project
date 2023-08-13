import Intro from "./components/HomepageComponents/Intro";
import HomePage from "./Pages/HomePage";
import {Route, Routes} from "react-router-dom";
import Courses from "./Pages/Courses";
import About from "./Pages/About";
import Footer from "./components/ReusableCompents/Footer";

import HeaderMenuBar from "./components/ReusableCompents/HeaderMenuBar";


function App(){
    return(<>
            <HeaderMenuBar></HeaderMenuBar>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer></Footer>
        </>
    )
}
export default App