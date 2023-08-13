import {Box, Grid, Stack, Typography} from "@mui/material";
import Rate from "../ReusableCompents/Rate";
import info from '../../images/info.png'
import langugeIcon from '../../images/noun_Language_1631767.png'
import courseImage from '../../images/Rectangle 380.png'
import {useSelector} from "react-redux";
import notFoundImage from '../../images/notFound.png'
import defaultProfilePicture from '../../images/profile.png'




function CourseDetailsHeader(){
    const subjectName=useSelector((state)=>{
        return state.subjects.subjectName
    })
    const data=useSelector((state)=>{
        return state.aboutCourse.courseDatails
    })
    if(data) {
        const courseDetails = data
        const imageUrl=courseDetails.classified_product.image_url===null?notFoundImage : courseDetails.classified_product.image_url
        const instructors = courseDetails.classified_product.instructors
        const renderedInstructor = courseDetails.classified_product.instructors.map((instructor) => {
            const profilePic=instructor.profile_picture_url===null?defaultProfilePicture:instructor.profile_picture_url
            return (
                <Grid sx={{pb: 2, mr: 7}}>
                    <Stack direction='row' spacing={1} alignItems="center">
                        <img src={profilePic} alt='instructor1'
                             style={{width: 32, height: 32, borderRadius: 40}}/>
                        <Typography sx={{width: 121, maxHeight: 25, overflow: 'hidden'}}>{instructor.name}</Typography>
                    </Stack>
                </Grid>
            )
        })
        return (
            <Stack direction='row' sx={{background: '#28A19C', color: 'white',mt:13}}>
                <Stack direction='row' justifyContent='space-between' sx={{ width: '100%'}}>
                <Stack spacing={3} sx={{pl: 10, pt: 5,flex: '1'}}>
                    <Typography sx={{
                        fontWeight: 700,
                        fontSize: 17
                    }}>{courseDetails.classified_product.subject} > {courseDetails.classified_product.title}</Typography>
                    <Typography
                        sx={{fontWeight: 700, fontSize: 32}}>{courseDetails.classified_product.title}</Typography>
                    <Typography sx={{
                        fontWeight: 600,
                        fontSize: 16,
                        opacity: '86%',
                        width: 676,
                        whiteSpace: 'warp'
                    }}>{courseDetails.classified_product.description}</Typography>
                    <Stack direction='row' spacing={30} sx={{pb: 2}}>
                        <Rate rate={data.final_rating_from_reviews} numberColor='white' rateSize={19} numberSize={14} rateColor='white'
                              ratesNumber={data.reviews_number}></Rate>
                        <Stack direction='row' spacing={1} alignItems="center">
                            <img src={info} alt='info' style={{width: 20, height: 20}}/>
                            <Typography sx={{whiteSpace: 'nowrap'}}>Last Updated 2/3/2019</Typography>
                        </Stack>
                        <Stack direction='row' spacing={1} alignItems="center">
                            <img src={langugeIcon} alt='language' style={{width: 20, height: 20}}/>
                            <Typography>English</Typography>
                        </Stack>
                    </Stack>
                    <Grid container>
                        {renderedInstructor}
                    </Grid>
                </Stack>
                    <Box sx={{ flex: '1', display: 'flex', justifyContent: 'flex-end' }}>
                    <img src={imageUrl} alt='courseImage' style={{width:400,height:'100%'}}/>
                        </Box>
                </Stack>
            </Stack>)
    }
}
export default  CourseDetailsHeader