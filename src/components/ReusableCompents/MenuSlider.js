import {Box, Button, Tooltip, Typography} from "@mui/material";
import MultipleItemSlider from "./MultipleItemSlider";
import {useRef} from "react";
import {useIsOverflow} from "../../hooks/useIsOverflow";


function MenuSlider({data,id,itemsNumber,handleSelection}){
    const basicStyle={fontSize:22,
        mr:10,ml:8,fontWeight:600,
        whiteSpace:'nowrap',pl:3,pr:3,pb:1,pt:1,
        letterSpacing:.73,opacity:'75%'}
    const selectedStyle={...basicStyle,
        background:'white',color:'#28A19C',
        borderRadius:2,width: 200,whiteSpace:'wrap',
        justifyContent:'center',
        alignItems:'center',display:'flex'}
    const notSelectedStyle={...basicStyle,maxWidth:270,overflow:'hidden',textOverflow:'ellipsis'}
   const content=data.map((option)=>{
            let style= id===option.id? selectedStyle: notSelectedStyle
            return (<Box key={option.id}   >
                <Typography onClick={()=>handleSelection(option)}  sx={style} alignItems="center" > {option.name}</Typography>
            </Box>)
        })

    return(
        <MultipleItemSlider itemsNumber={data.length<itemsNumber?data.length:itemsNumber} children={content}></MultipleItemSlider>
    )

}
export default MenuSlider;