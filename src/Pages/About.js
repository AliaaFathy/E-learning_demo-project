import {Box} from "@mui/material";

import course from '../images/Rectangle 380.png'
import MenuBar from "../components/AboutCourseComponents.js/menuBar";
import AboutCourse from "../components/AboutCourseComponents.js/AboutCourse";
import Requirement from "../components/AboutCourseComponents.js/Requirement";
function About(){
    return(
        <Box>
        <Box sx={{height:387,background:'#28A19C'}}>
          <img style={{height:387,marginLeft:905}} src={course} alt='course-image'/>
        </Box>
            <MenuBar></MenuBar>
            <AboutCourse></AboutCourse>
            <Requirement></Requirement>

        </Box>
    )

}
export default About;