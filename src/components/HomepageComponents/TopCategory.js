import Header from "./header";
import {Box, Stack} from "@mui/material";
import DropDown from "../ReusableCompents/DropDown";
import {useNavigate} from "react-router-dom";
import FilteredCourses from "./FilteredCourses";
import CustomButton from "../ReusableCompents/CustomButton";
import SubjectMenuBar from "./subjectMenuBar";
const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];
function TopCategory(){
    const navigate = useNavigate();
    const dropDownStyle={color:'#8E8E93',borderRadius:4}
    return(
        <div>
        <Header header='Top Category' details='Learn the latest skills to reach your professional goals'></Header>
            <Stack direction='row' alignItems='center' justifyContent='center' marginTop={2}>
                <DropDown content='Choose your curriculum' options={names} style={dropDownStyle}></DropDown>
                <DropDown content='Choose your study phase' options={names} style={dropDownStyle}></DropDown>
            </Stack>
            <SubjectMenuBar></SubjectMenuBar>
            <FilteredCourses></FilteredCourses>
            <CustomButton
                onClick={()=>navigate('courses')}
                variant='contained'
                buttonText='View More courses'>
            </CustomButton>


        </div>
    )
}
export default TopCategory