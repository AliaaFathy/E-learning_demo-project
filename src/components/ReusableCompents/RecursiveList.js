import {Box, Button, Stack, Typography} from "@mui/material";
import lockIcon from '../../images/lock.jpg'
import {useRef, useState} from "react";
import useExpansion from "../../hooks/useExpansion";
import {useIsOverflow} from "../../hooks/useIsOverflow";
import useExpantion from "../../hooks/useExpansion";

function RecursiveList({data,header,type,imageSrc}){
    const{isExpanded,handleExpansion}=useExpantion()
    const ref=useRef();
    const isOverflow=useIsOverflow(ref)
    const basicStyle={ml:10,pt:3}
    const style=isExpanded?basicStyle:{...basicStyle,maxHeight:480,overflow:'hidden',textOverflow:'ellipsis'}
    const renderedData=data.map((object,index)=>{
        return(
            <Stack spacing={2} key={index}>
        <Typography
            sx={{display:'flex',fontWeight:700,fontSize:20}}>
            <img
                src={imageSrc}
                alt='quiz-or-assignment'
                style={{width:24,height:24,marginTop:7}}/>
            {type} {index+1}
        </Typography>
                <Stack
                    direction='row'
                    alignItems={'center'}
                    justifyContent='space-between'  >
                    <Typography
                        sx={{fontWeight:400,fontSize:15,width:1200,whiteSpace:'wrap'}}>
                        {object.title}
                    </Typography>
                    <img
                        style={{width:12,height:16,marginRight:50}}
                        src={lockIcon}
                        alt='lock'/>
                </Stack>
        <Box
            sx={{border:'solid 1px #9B9B9B',width:1400,mt:2}}>

        </Box>
            </Stack>
        )
    }
)
    return(

            <Stack sx={{background:'white',mt:5,pb:10}}>
                <Box sx={style} ref={ref} >
                    <Typography variant='h3'
                        sx={{mb:3}}>
                        {header}
                    </Typography>
                    <Stack
                        spacing={2} >
                    {renderedData}
                    </Stack>
                </Box>
                <Box
                    sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    {isOverflow
                        &&
                        <Button
                            onClick={handleExpansion}
                            sx={{textTransform:'none',mt:4,mb:3,border:'solid 1.6px #28A19C',
                        color:'#28A19C',width:350,height:52,fontWeight:600,fontSize:20}}>
                            {isExpanded?`View Less  ${header} ` : `View All ${header} `}
                    </Button>
                    }
                </Box>
      </Stack>

    )
}
export default RecursiveList