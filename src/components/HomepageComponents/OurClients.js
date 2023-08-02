import Header from "./header";
import {Box, Button, Typography} from "@mui/material";
import Apple from '../../images/apple.png'
import Intel from '../../images/intel.png'
import IBM from '../../images/ibm.png'
import Microsoft from '../../images/microsoft.png'
import Google from '../../images/google.png'
import {useState} from "react";




function OurClients(){
    const[isExpanded,seIsExpanded]=useState(false)
    const sources=[Apple,Intel,IBM,Microsoft,Google,Apple,Intel,IBM,Microsoft,Google,Apple,Intel,IBM,Microsoft,Google,Apple,Intel];
    const renderedSources=sources.map((source,index)=>{
        return<img src={source} alt='logo' style={{width:58.41 ,marginRight:235,marginTop:90,position:'relative',left:90}} key={index}/>
    })
    const handleExpantion=()=>{
        seIsExpanded(!isExpanded)
    }
    const expanded=<Box component="div" sx={{background:'white',height:'auto',mt:10,pb:5}}>
        <Box component='div' sx={{ml:80,position:'absolute',mt:4,fontWeight:700,fontSize:32,letterSpacing:1.07,color:'#FFBA00',fontFamily:'Quicksand'}} >Our Clients</Box>
        <Typography onClick={handleExpantion} sx={{position:'absolute',ml:160,mt:4,fontSize:26,color:'#28A19C',fontFamily:'Quicksand',fontWeight:600}}>View Less</Typography>
        <Box component="div" sx={{display:'flex',flexWrap:'wrap',ml:5}}>
            {renderedSources}
        </Box>
    </Box>


    return (
        <Box>
        {isExpanded ? expanded : <Box component="div" sx={{background:'white',height:227,mt:10,overflow: 'hidden'}}>
            <Box component='div' sx={{ml:80,position:'absolute',mt:4,fontWeight:700,fontSize:32,letterSpacing:1.07,color:'#FFBA00',fontFamily:'Quicksand'}} >Our Clients</Box>
            <Typography onClick={handleExpantion} sx={{position:'absolute',ml:160,mt:4,fontSize:26,color:'#28A19C',fontFamily:'Quicksand',fontWeight:600}}>View All</Typography>
            <Box component="div" sx={{display:'flex',flexWrap:'wrap',ml:5}}>
                {renderedSources}
            </Box>
        </Box>}
        </Box>
    )
}
export default OurClients;