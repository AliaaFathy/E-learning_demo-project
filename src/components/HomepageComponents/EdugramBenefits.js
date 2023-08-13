import image from '../../images/Group 248.png'
import {Box, List, ListItem, ListItemIcon, ListItemText, Stack} from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import benefits from '../../images/benefits.png'
function EdugramBenefits(){
    let edugram=<Box component="span" sx={{position:'absolute',
        fontWeight:700,fontSize:32,letterSpacing:1.07,color:'#28A19C',ml:1}}> Edugram</Box>
    return (
        <Stack spacing={20} direction='row'  sx={{background:'white',height:497}}>
            <img src={image} alt='image' style={{width:488,height:417,marginTop:35,marginLeft:80}}/>
            <img src={benefits} alt={'Edugram Benefits'} style={{width:580,marginTop:70,height:357}}/>

        </Stack>

    )

}
export default EdugramBenefits