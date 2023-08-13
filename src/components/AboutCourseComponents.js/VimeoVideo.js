import {Box} from "@mui/material";
import Vimeo from "@u-wave/react-vimeo";

function VimeoVideo({videoUrl}){
    const videoId=videoUrl.split('/').pop();
    return(
        <Box sx={{position:'relative',bottom:21}}>
            <Vimeo video={videoId} width={389} height={261} ></Vimeo>
        </Box>
    )
}
export default VimeoVideo;