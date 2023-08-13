import {Grid, Typography, Box, ListItem, List, Button, Stack} from "@mui/material";
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import {useRef, useState} from "react";
import useExpansion from "../../hooks/useExpansion";
import {useIsOverflow} from "../../hooks/useIsOverflow";


function WhatyouWillLearn({header,data}){
    const {isExpanded,handleExpansion}=useExpansion()
    const basicStyle={mt:2,ml:2}
    const ref=useRef();
    const isOverflow=useIsOverflow(ref)
    const style=isExpanded?basicStyle: {...basicStyle,height:150,overflow:'hidden'}
   const renderedData= data.map((item) => {
       return(
    <Grid item  key={item.id}>
        <Stack direction='row'>
        <CheckOutlinedIcon color='secondary' />
        <Typography sx={{width:327}} variant="body1">{item.data}</Typography>
        </Stack>
    </Grid>
       )
     })

    return(
        <Box sx={{width:795,background:'white',color:'#343434',mt:5,ml:10,borderRadius:2,pb:2}}>
            <Box >
            <Typography variant='h3'  marginLeft={3} paddingTop={3}>{header}</Typography>
                    <Grid container
                          spacing={2}
                          sx={style}
                          ref={ref}>
                        {renderedData}
                    </Grid>
            </Box>
            <Box sx={{bottom:40}}>
                {isOverflow&&<Typography onClick={handleExpansion} sx={{ml:5,fontWeight:600,fontSize:18,color:'#28A19C'}}>{isExpanded?"Show less":"Show more"}</Typography>}
            </Box>

        </Box>
    )
}
export default WhatyouWillLearn;