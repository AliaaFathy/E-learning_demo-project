import {Rating, Stack, Typography} from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {StarBorder} from "@mui/icons-material";


function Rate({rate,ratesNumber,rateColor,rateSize,numberColor,numberSize}){
    return(
    <Stack direction='row'
           spacing={1}
           alignItems="center">
    <Typography
        color={rateColor}
        fontWeight={600}
        fontSize={rateSize} >
        {rate}
    </Typography>
    <Rating
        name="read-only"
        value={rate}
        size={"small"}
        precision={.5}
        readOnly
        emptyIcon={<StarBorder
            sx={{color:'#FFBA00'
                ,fontSize:'large'
                ,pt:.1}} />}/>
    <Typography
        fontWeight={400}
        color={numberColor}
        fontSize={numberSize} >
        ({ratesNumber})
    </Typography>
    </Stack>
    )
}
export default Rate