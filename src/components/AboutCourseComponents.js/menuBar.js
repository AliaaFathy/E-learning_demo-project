import {Box, Button, Typography} from "@mui/material";
import {useState} from "react";

function MenuBar (){
    const[optionIndex,setOptionIndex]=useState(0)
    const handleClick=(index)=>{
        setOptionIndex(index)
    }
    const options=['Overview','content','instructors','Reviews','Quizes','Assignment']

    const Selected=<Typography sx={{fontSize:16,color:'#28A19C', p:3,
        fontWeight:600,ml:10,borderBottom: 'solid #28A19C'}} onClick={()=>handleClick(optionIndex)}
                               key={optionIndex}>{options[optionIndex]}</Typography>
    const renderedOption=options.map((option,index)=>{
        return <Box>{optionIndex === index ? Selected : <Typography onClick={()=>handleClick(index)}
            sx={{fontSize:16,color:'#7B7B7B', fontWeight:600,ml:10, p:3}} key={index}>{option}</Typography>}</Box>
    })
    return(
        <Box>
            <Box sx={{display:'flex' ,background:'white'}}>{renderedOption}</Box>
        </Box>
    )
}
export default MenuBar