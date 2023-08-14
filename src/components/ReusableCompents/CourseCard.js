import {
    Box,
    Button,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Card,
    CardActions,
    Rating, Stack
} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";
import saveIcon from '../../images/save.png'
import coloredSaveIcon from '../../images/coloredSave.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Rate from "./Rate";
import {useRef, useState} from "react";
import {useIsOverflow} from "../../hooks/useIsOverflow";
import {useDispatch} from "react-redux";
import {setCourseId} from "../../store";
import useExpantion from "../../hooks/useExpansion";
import notFoundImage from '../../images/notFound.png'


function CourseCard({course}){
 const navigate=useNavigate()
    const location=useLocation()
    const [isSaved,setIsSaved]=useState(false)
    const{isExpanded,handleExpansion}=useExpantion()
    const ref=useRef();
    const isOverflow=useIsOverflow(ref)
    let instructorName=''
    const instructors=course.classified_product.instructors.map((instructor,index)=>{
        if(index===0) {
            return instructorName += instructor.name
        }
        return instructorName += `,${instructor.name}`
    })


    const dispatch=useDispatch()
    const basicStyle={fontWeight:500,fontSize:11,opacity:'75%',whiteSpace:'wrap'}
    const style=isExpanded?basicStyle:{...basicStyle,maxWidth:190,maxHeight:32,overflow:'hidden',
        textOverflow:'ellipsis'}
    const handleClick=(course_id)=>{
        dispatch(setCourseId(course_id))

        if(location.pathname!=='/about') {
            navigate('/about')
        }
    }
    const handleSaveClick=()=>{
        setIsSaved(!isSaved)
    }
    const imageUrl=course.classified_product.image_url===null?notFoundImage:course.classified_product.image_url

    return(<Box >
        <Card
        sx={{ width: 270,mt:10,pb:2,
        boxShadow: '0px 3px 6px 0px #00000029',borderRadius:5}}>
        <CardActionArea  >
            <CardMedia >
                <Stack
                    direction='row'
                    position='relative'>
                    <img
                        src={isSaved?coloredSaveIcon:saveIcon}
                         onClick={handleSaveClick}
                         alt='White-Black save'
                         style={{position:'absolute',left:215,top:20}}/>
                    <img src={imageUrl}
                         alt="Course-Card"
                         style={{height:140,width:270}} />
                </Stack>
            </CardMedia>
            <CardContent
                sx={{height:280,...(isExpanded&&{height:'auto'})}}>
               <Stack spacing={1}>
                   <Typography
                       sx={{fontWeight:700,fontSize:16}}
                       onClick={()=>handleClick(course.classified_product.course_id)}>
                       {course.classified_product.title}
                   </Typography>
                   <Rate
                       rate={course.final_rating_from_reviews}
                       rateSize={14}
                       numberSize={11}
                       numberColor='#938F8C'
                       rateColor='#F7B52E'
                       ratesNumber={course.reviews_number}>
                   </Rate>
                   <Typography
                       sx={{width:240,fontWeight:600,fontSize:12,overflow:'hidden',
                       textOverflow:'ellipsis',
                           whiteSpace:'nowrap',
                           opacity:'75%'}}>
                       {instructorName}
                   </Typography>

                   <Typography
                       sx={style}
                       ref={ref}>
                       {course.classified_product.description}
                   </Typography>
                       {isOverflow&&
                           <Typography onClick={handleExpansion}
                                       sx={{fontWeight:600,fontSize:10,position:'relative',left:120}}>
                               {isExpanded?'See Less':'See More'}
                           </Typography>}
                   <Stack
                       direction='row'
                       spacing={2}>
                   <Typography
                       sx={{fontWeight:700,fontSize:16}}>
                       {course.original_price_currency}
                       {course.original_price}
                   </Typography>
                       {course.discount_percentage !==0&&<Typography
                           sx={{textDecoration:'line-through'
                               ,fontWeight:500,
                               fontSize:16,
                               opacity:'50%'}}>
                           {course.original_price_currency}
                           {course.price_after_discount}
                       </Typography>}
                   </Stack>
               </Stack>
            </CardContent>
        </CardActionArea>
        <CardActions >
            <Button variant='outlined'
                sx={{border:' 1.5px solid',
                fontSize:15,width:170,borderRadius:2}}>
                Enroll Now
            </Button>
            <Button  variant='outlined'
                sx={{
                fontSize:15,width:56,borderRadius:2,border: '1.5px solid'}}>
                <ShoppingCartOutlinedIcon/>
            </Button>
        </CardActions>
    </Card>
        </Box>
        )
}
export default CourseCard;