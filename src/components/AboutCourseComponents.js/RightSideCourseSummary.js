import {Box, Button, List, ListItem, Stack, Typography} from "@mui/material";
import videoIcon from '../../images/Group 1169.jpg'
import downloadIcon from '../../images/Group 1174.jpg'
import infintyIcon from '../../images/infinity.jpg'
import mobileIcon from '../../images/mobile.jpg'
import assignmentIcon from '../../images/noun_Assignment_4347215.jpg'
import certificateIcon from '../../images/noun_Certificate_690368.jpg'
import Vimeo from "@u-wave/react-vimeo";
import {useSelector} from "react-redux";
import VimeoVideo from "./VimeoVideo";
const data=[{imageUrl:videoIcon,description:'13 hours on-demand video'},
    {imageUrl: downloadIcon,description:'69 downloadable resources'},
    {imageUrl: infintyIcon,description:'Full lifetime access'},
    {imageUrl: mobileIcon,description:'Access on mobile and TV'},
    {imageUrl: assignmentIcon,description:'Assignments'},
    {imageUrl: certificateIcon,description:'Certificate of completion'}]
function isValidVimeoUrl(url) {
    const vimeoRegex = /^https:\/\/vimeo\.com\/\d+$/;
    return vimeoRegex.test(url);
}
function RightSideCourseSummary(){
    const courseDetail=useSelector((state)=>{
        return state.aboutCourse.courseDatails
    })

     const basicButtonStyle={mt:7,mb:3,width:350,height:52,fontSize:22,borderRadius:1,
         boxShadow:'0px 3px 6px 0px #00000029'}
    const containedStyle={...basicButtonStyle,color:'white'}
    const video=courseDetail.classified_product.video_url
    const validUrl=isValidVimeoUrl(video)
    const videoUrl=video===null?'https://vimeo.com/498071737':validUrl?video:'https://vimeo.com/498071737'
    const renderedData=data.map((data,index)=>{
        return(
            <Stack direction='row' spacing={2} key={index} alignItems='center'>
                <img src={data.imageUrl} alt='image' style={{width:24,height:11}}/>
                <Typography>{data.description}</Typography>
            </Stack>
        )
    })

    return(
        <Box  sx={{width:389,background:'white',left:900,position:'absolute',borderRadius:2,pb:3}}>
           <VimeoVideo videoUrl={videoUrl}/>
            <Stack spacing={2} sx={{ml:3}}>
            <Typography sx={{fontWeight:500,fontSize:20}}>Course Price</Typography>
            <Typography sx={{fontWeight:700,fontSize:48}}>{courseDetail.original_price_currency} {courseDetail.price_after_discount}</Typography>
                <Button variant='contained' sx={containedStyle}>Enroll Now</Button>
                <Button variant='outlined' sx={basicButtonStyle}>Add To Cart</Button>
            </Stack>
            <Stack spacing={2} sx={{ml:3,mt:3}}>
                <Typography sx={{fontWeight:700,fontSize:18}}>This course include:</Typography>
                {renderedData}
                </Stack>

                </Box>
    )
}
export default RightSideCourseSummary