import Header from "./header";
import DropDown from "../DropDown";
import SlideMenu from "../slideMenu";
import CardList from "../CardList";
import {Button} from "@mui/material";

function popularCertificate(){
    const certificate=['Master Track Certificates',
                               'IT Certificates',
                                'University Certificates',
                                 'Master Certificates']
    return(
        <div>
            <Header header='Popular Certificates' details='Break into a new field. No prior experience necessary to get started'></Header>
            <SlideMenu options={certificate} marginRight={5}></SlideMenu>
            <CardList></CardList>
            <Button variant='button' sx={{
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
export default popularCertificate;