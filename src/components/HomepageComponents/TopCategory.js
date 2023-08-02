import Header from "./header";
import CardList from "../CardList";
import {Button, Link} from "@mui/material";
import DropDown from "../DropDown";
import SlideMenu from "../slideMenu";
import {useNavigate} from "react-router-dom";

function TopCategory(){
    const courses=['Development','Design','Marketing','Business','Languages']
    const navigate = useNavigate();

    return(
        <div>
        <Header header='Top Category' details='Learn the latest skills to reach your professional goals'></Header>
            <div className='flex'>
                <DropDown content='Choose your curriculum'></DropDown>
                <DropDown content='Choose your study phase'></DropDown>
            </div>
            <SlideMenu options={courses} marginRight={10}></SlideMenu>
            <CardList></CardList>
            <Button onClick={()=>navigate('courses')} variant='button'  sx={{
                width:314,
                color:'white',
                background:'#28A19C',
                mt:8,
                ml:75,
                fontFamily:'Quicksand',
                fontSize:22,textAlign:'center',borderRadius:5}}> View More Courses</Button>
        </div>
    )
}
export default TopCategory