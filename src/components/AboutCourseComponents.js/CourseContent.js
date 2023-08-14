import {Box, Button, Stack, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import Chapter from "./Chapter";

function CourseContent(){
    const data=useSelector((state)=>{
        return state.aboutCourse.courseDatails
    })
    let sections
    let renderedSections
        sections = data.classified_product.sections
         renderedSections = sections.map((section, index) => {

            return (
                <Box key={section.section_id}>
                    <Stack direction='row'>
                        <Stack>
                            <Typography sx={{ml: 3, fontWeight: 600, fontSize: 14}}>Chapter </Typography>
                            <Typography sx={{ml: 6, fontWeight: 500, fontSize: 48}}>{index + 1}</Typography>
                        </Stack>
                        <Stack sx={{ml: 10}}>
                            <Stack direction='row' spacing={1}>
                                <Typography sx={{
                                    fontWeight: 600,
                                    fontSize: 24,
                                    width: 400,
                                    whiteSpace: 'wrap'
                                }}>{section.title}</Typography>
                                <Button variant='contained' sx={{
                                    color: 'white',top:15,
                                    width: 161, height: 48,
                                    fontSize: 18, borderRadius: 2, boxShadow: '0px 3px 6px 0px #00000029'}}>
                                    Enroll Chapter</Button>
                            </Stack>
                            <Chapter section={section}></Chapter>
                        </Stack>
                    </Stack>


                </Box>
            )
        })

   
    return(
        <Box id='1' sx={{width:795,background:'white',color:'#343434',mt:5,ml:10,borderRadius:2,pb:3}}>
            <Typography sx={{fontWeight:700,fontSize:24,ml:3,pt:5}}>Content</Typography>
            <Typography sx={{mt:1,ml:3,fontWeight:500,fontSize:15}}>{sections.length} {sections.length>1?'sections':'section'}  </Typography>
            <Box sx={{mb:8}}>
                <Box sx={{position: 'relative', top: 50}}>
                    {renderedSections}
                </Box>
            </Box>

        </Box>
    )

}
export default CourseContent;