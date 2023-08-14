import {Box, Grid, Stack, Typography} from "@mui/material";
import star from '../../images/Group 1199.png'
import group from '../../images/group.png'
import play from '../../images/FontAwsome (play).png'
import {useSelector} from "react-redux";
import defaultProfilePicture from '../../images/profile.png'


function Instructors(){
    const data=useSelector((state)=>{
        return state.aboutCourse.courseDatails
    })
        const imageStyle = {width: 16, height: 15, marginRight: 10, marginTop: 3, marginBottom: 5}
        const instructors = data.classified_product.instructors //data from Api
        const renderedInstructorsDetails = instructors.map((instructor) => {
            const imageUrl=instructor.profile_picture_url===null?defaultProfilePicture:instructor.profile_picture_url
            return (
                <Grid item xs={0} id='2' sx={{mr: 10,mb:2}} key={instructor.instructor_id}>
                    <Stack direction='row' spacing={2} >
                        <img src={imageUrl} alt='ProfilePicture'
                             style={{width: 100, height: 100, borderRadius: 50}}/>
                        <Stack>
                            <Typography sx={{
                                fontWeight: 700,
                                fontSize: 20,
                                width: 151,
                                maxHeight: 30,
                                overflow: 'hidden'
                            }}>{instructor.name}</Typography>
                            <Typography sx={{
                                fontWeight: 400,
                                fontSize: 15,
                                width: 248,
                                maxHeight: 45,
                                display: 'row',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                            }}>
                                {instructor.job_title}</Typography>
                            <Box sx={{display: 'flex'}}>
                                <img src={star} alt={'star'} style={imageStyle}/>
                                <Typography sx={{fontWeight: 500, fontSize: 14, display: 'flex'}}>{4.5}
                                    <Typography component='span' sx={{fontWeight: 400, fontSize: 14, ml: 1}}>Instructor
                                        Rating</Typography>
                                </Typography>
                            </Box>
                            <Box sx={{display: 'flex'}}>
                                <img src={group} alt={'group'} style={imageStyle}/>
                                <Typography sx={{fontWeight: 500, fontSize: 14, display: 'flex'}}>452,272
                                    <Typography component='span' sx={{fontWeight: 400, fontSize: 14, ml: 1}}> Learner</Typography>
                                </Typography>
                            </Box>
                            <Box sx={{display: 'flex'}}>
                                <img src={play} alt={'play'} style={imageStyle}/>
                                <Typography sx={{fontWeight: 500, fontSize: 14, display: 'flex'}}>30
                                    <Typography component='span' sx={{fontWeight: 400, fontSize: 14, ml: 1}}> Courses</Typography>
                                </Typography>

                            </Box>
                        </Stack>
                    </Stack>
                </Grid>
            )
        })
        return (
            <Box id='2' sx={{background: '#F8F8F8', mt: 5, pb: 3}}>
                <Box  sx={{ml: 10}}>
                    <Typography sx={{
                        fontWeight: 700,
                        fontSize: 24,
                        top: 25,
                        position: 'relative',
                        mb: 7
                    }}>Instructors</Typography>
                    <Grid container>
                        {renderedInstructorsDetails}
                    </Grid>
                </Box>
            </Box>
        )
    }


export default Instructors;