import {Box, List, ListItem, Typography} from "@mui/material";
const list=[
    {id:1,value:'You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe'},
    {id:2,value:'No previous design experience is needed.'},
    {id:3,value:'No previous Adobe XD skills are needed.'}]

function Requirement(){
    const style={display:'list-item',listStyleType:'disc',fontWeight:500,fontSize:14,opacity:'86%'}
    const renderedListItem=list.map((listItem)=>{
      return  <ListItem  sx={style} key={listItem.id}>{listItem.value}</ListItem>

    })
    return(
        <Box sx={{width:795,height:221,background:'white',color:'#343434',mt:5,position:'relative',ml:10,borderRadius:2}}>
            <Typography variant='h3' position='absolute' marginLeft={3} marginTop={3}>Requirements</Typography>
            <List  sx={{ml:5,mt:7,position:'absolute'}}>
                {renderedListItem}
            </List>
        </Box>
    )
}
export default Requirement;