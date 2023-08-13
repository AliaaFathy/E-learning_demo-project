import {Box, Button, Link, Stack, Typography} from "@mui/material";
import {useState} from "react";

function MenuBar ({menuBarContent}){
    const[optionIndex,setOptionIndex]=useState(0)
    const handleClick=(index)=>{
        setOptionIndex(index)
    }
    const basicStyle={fontSize:16,color:'#7B7B7B', fontWeight:600,
        height:50,scrollBehavior:'smooth',textDecoration:'none'}
    const renderedOption=menuBarContent.map((option,index)=>{
        const style=optionIndex===index?{...basicStyle,borderBottom: 'solid #28A19C'}:basicStyle
        return  <Link
            href={`#${index}`}
            onClick={()=>handleClick(index)}
            sx={style}
            key={index}>
            {option}
        </Link>
    })
    return(
        <Box sx={{background:'white'}}>
            <Stack direction='row' spacing={15} sx={{pt:3,ml:10}} >{renderedOption}</Stack>
        </Box>
    )
}
export default MenuBar