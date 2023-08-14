import Header from "./header";
import {Box, Button, Typography} from "@mui/material";
import Apple from '../../images/apple.png'
import Intel from '../../images/intel.png'
import IBM from '../../images/ibm.png'
import Microsoft from '../../images/microsoft.png'
import Google from '../../images/google.png'
import {useState} from "react";
import useExpansion from "../../hooks/useExpansion";

function OurClients(){
    const {isExpanded,handleExpansion}=useExpansion();
    const sources=[Apple,Intel,IBM,Microsoft,Google,Apple,Intel,IBM,Microsoft,Google,Apple,Intel,IBM,Microsoft,Google,Apple,Intel];
    const notExpandedStyle={background:'white',height:227,mt:10,overflow: 'hidden'}
    const expandedStyle={background:'white',mt:10,pb:5}
    const style=isExpanded?expandedStyle:notExpandedStyle;
    const renderedSources=sources.map((source,index)=>{
        return<img src={source} alt='logo' style={{width:58.41 ,marginRight:235,marginTop:90,position:'relative',left:90}} key={index}/>
    })




    return (
        <Box>
         <Box component="div" sx={style}>
            <Box component='div' sx={{ml:80,position:'absolute',mt:4,fontWeight:700,
                fontSize:32,letterSpacing:1.07,color:'#FFBA00',fontFamily:'Quicksand'}} >Our Clients</Box>
            <Typography onClick={handleExpansion} sx={{position:'absolute',ml:160,mt:4,fontSize:26,color:'#28A19C',fontWeight:600,cursor:'pointer'}}>
                {isExpanded?'View Less': 'View All'}</Typography>
            <Box component="div" sx={{display:'flex',flexWrap:'wrap',ml:5}}>
                {renderedSources}
            </Box>
        </Box>
        </Box>
    )
}
export default OurClients;