import image from '../../images/Group 248.png'
import {Box, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
function EdugramBenefits(){
    let edugram=<Box component="span" sx={{position:'absolute',
        fontWeight:700,fontSize:32,letterSpacing:1.07,color:'#28A19C',ml:1}}> Edugram</Box>
    return (
        <Box component="div" sx={{background:'white',height:497,mt:10}}>
            <img src={image} alt='image' style={{width:488,height:417,marginLeft:80,marginTop:40,position:'absolute'}}/>
            <Box component="div" sx={{width:580,height:357,position:'absolute'  ,ml:100,mt:10}}>
            <Box component="span" sx={{width:341,height:84,position:'absolute',
                fontWeight:700,fontSize:32,letterSpacing:1.07,color:'#FFBA00'}}>Benefits Of Learning From {edugram}</Box>
                <List sx={{position:'absolute',mt:15,fontFamily:'Quicksand',opacity:'75%'}}>
                <ListItem >
                    <ListItemIcon><CheckCircleOutlineIcon></CheckCircleOutlineIcon></ListItemIcon>
                    <ListItemText>Access 16,000+ expert-led courses.</ListItemText>
                </ListItem>
                    <ListItem>
                        <ListItemIcon><CheckCircleOutlineIcon></CheckCircleOutlineIcon></ListItemIcon>
                        <ListItemText>Expert instructors with lifetime access on your courses.</ListItemText>
                    </ListItem>
                    <ListItem>
                       < ListItemIcon><CheckCircleOutlineIcon></CheckCircleOutlineIcon></ListItemIcon>
                    <ListItemText>Use project files and quizzes to practice while you learn.</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><CheckCircleOutlineIcon></CheckCircleOutlineIcon></ListItemIcon>
                        <ListItemText>View courses anytime on your computer or phone</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><CheckCircleOutlineIcon></CheckCircleOutlineIcon></ListItemIcon>
                        <ListItemText>Earn a certificate when you complete a course.</ListItemText>
                    </ListItem>
                </List>
            </Box>

        </Box>

    )

}
export default EdugramBenefits