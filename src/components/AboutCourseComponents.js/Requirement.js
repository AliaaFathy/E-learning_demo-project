import {Box, List, ListItem, Typography} from "@mui/material";

function Requirement(){
    const style={display:'list-item',listStyleType:'disc'}
    return(
        <Box sx={{width:795,height:221,background:'white',color:'#343434',mt:5,position:'relative',ml:10,borderRadius:2}}>
            <Typography sx={{fontWeight:700,fontSize:24,ml:3,position:'absolute',mt:3}}>Requirements</Typography>
            <List  sx={{ml:5,mt:7,position:'absolute'}}>
                <ListItem sx={style}>You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe</ListItem>
                <ListItem sx={style}>No previous design experience is needed.</ListItem>
                <ListItem sx={style}>No previous Adobe XD skills are needed.</ListItem>
            </List>



        </Box>
    )
}
export default Requirement;