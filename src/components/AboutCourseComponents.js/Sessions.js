import {Box, Button, Stack, Typography} from "@mui/material";
import videoIcon from "../../images/video.jpg";
import Session from "./session";
import useExpansion from "../../hooks/useExpansion";
import bookIcon from "../../images/Group 1531.jpg";

function Sessions({section}){
    const desiredTypes = ['video', 'default','video and text'];
    const {isExpanded,handleExpansion}=useExpansion();
    const videoSession = section.sessions.filter(
        (session) =>desiredTypes.includes( session.content_type)
    );
    const readingSession=section.sessions.filter(
        (session) =>session.content_type==='text')
    console.log(videoSession)
    console.log(readingSession)
    const videosNumber= videoSession.length > 0
        ? `${videoSession.length} ${videoSession.length === 1 ? 'Video' : 'Videos'}`
        : '';
    const assignmentNumber=readingSession.length > 0
        ? `${readingSession.length} ${readingSession.length === 1 ? 'Reading' : 'Readings'}`
        : '';
    return(
        <Stack >

            <Stack spacing={2}>
                <Stack
                    direction='row'
                    alignItems='center'
                    spacing={2}>
                    <img
                        src={bookIcon}
                        alt='book'
                        style={{width: 42, height: 42}}/>
                    <Typography sx={{fontWeight: 500, fontSize: 15}}> {videosNumber && assignmentNumber ? `${videosNumber},
                     ${assignmentNumber}`
                        : `${videosNumber}${assignmentNumber}`}
                    </Typography>
                </Stack>

            <Typography onClick={handleExpansion} sx={{  fontWeight:600,fontSize:18,color:'#28A19C'}} >{isExpanded?'Show Less':'Show More'}</Typography>
            <Box sx={{border: 'solid 1px #9B9B9B', width: 600}}></Box>
            </Stack>
            {isExpanded&&
            videoSession.length>0 &&<Session data={videoSession} ></Session>}
            {isExpanded&&
            readingSession.length>0&&  <Session data={readingSession}></Session>}
    </Stack>
    )
}
export default Sessions