import { GoChevronLeft,GoChevronRight } from "react-icons/go";
import './styles/slideMenu.css'
import {useState} from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {Box, Button, Typography} from "@mui/material";

function SlideMenu({options,marginRight}){
    const[clickedIndex,setClickedIndex]=useState(null)
    const handleClick=(index)=>{
        console.log(index)

        setClickedIndex(index)
        console.log(clickedIndex)
    }
    const style={width:'auto',height:24,fontSize:22,mr:marginRight,ml:8,fontWeight:600, boxShadow: 'none',
        textTransform: 'none',
        color:'#343434',letterSpacing:.73,fontFamily:'Quicksand',opacity:'75%',whiteSpace:'nowrap'}

    let renderedOptions=options.map((option,index)=>{
        return (<div key={index} >
            {clickedIndex===index? <Typography onClick={()=>handleClick(index)}  sx={{width:'auto',height:34,fontSize:22,mr:8,ml:8,fontWeight:600, boxShadow: 'none', whiteSpace:'nowrap',
                textTransform: 'none',background:'white',color:'#28A19C',pl:2,pr:2
                ,letterSpacing:.73,fontFamily:'Quicksand',opacity:'75%',borderRadius:2}} > {option}</Typography>:
                <Typography onClick={()=>handleClick(index)}    sx={style} >{option}</Typography>
            }
        </div>)
    })


        return(
    <div className='menu'>
        <ArrowBackIosNewIcon sx={{ml:10,color: '#28A19C',mt:1}}></ArrowBackIosNewIcon>
        <Box omponent="div" sx={{width:148,height:24,display:'flex'}}>{renderedOptions}</Box>
        <ArrowForwardIosIcon sx={{ml:145,color: '#28A19C',mt:1}} ></ArrowForwardIosIcon>
    </div>
    )

}
export default SlideMenu;