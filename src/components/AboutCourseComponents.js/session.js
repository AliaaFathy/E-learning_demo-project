import {Box, Button, Stack, Typography} from "@mui/material";
import videoIcon from "../../images/video.jpg";
import readingIcon from '../../images/reading.jpg'

function Session({data}){
    const type=data[0].content_type
    const renderedSession=data.map((sessionOfType)=>{
        return(
            <Stack key={sessionOfType.course_session_id} >
                <Stack sx={{position:'relative'}} >
                    <Stack direction='row' alignItems={'center'}  >
                        <Typography sx={{fontWeight:400,fontSize:15,color:'#343434',whiteSpace:'wrap',maxWidth:400}}>{sessionOfType.title}</Typography>
                        {type!=='book'&& <Typography sx={{left:400,position:'absolute',fontWeight:400,fontSize:15,color:'#767676'}}>{sessionOfType.expected_time} {sessionOfType.expected_time_unit}</Typography>}
                        <Button sx={{position:'absolute',left:500,color:'#28A19C',fontWeight:600,fontSize:16,textTransform:'none'}}>Preview</Button>
                    </Stack>
                </Stack>
            </Stack>
        )
    })
    return(
        <>
            <Stack direction='row'>
                <img
                    src={type==='book'?readingIcon :videoIcon}
                    style={{width:24,height:24,marginTop:5,marginRight:2}}
                    alt='video-reading'/>
                <Typography
                    sx={{fontWeight:700,fontSize:20,color:'#343434'}}>
                    {data.length} {type==='book'?data.length>1?'Readings':'Reading':data.length>1?'Videos':'Video'}
                </Typography>
            </Stack>
            {renderedSession}
            <Box
                sx={{border:'solid 1px #9B9B9B',width:600,mt:4}}>

            </Box>

        </>
    )
}
export default Session;