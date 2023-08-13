import {Box, Button, Rating, Stack, Typography} from "@mui/material";
import useExpansion from "../../hooks/useExpansion";
import CustomButton from "../ReusableCompents/CustomButton";
import PercentRangeBar from "../ReusableCompents/PercentRangeBar";
import {StarBorder} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {useRef} from "react";
import {useIsOverflow} from "../../hooks/useIsOverflow";

function Reviews({rating,usersReview}){
    const data=useSelector((state)=>{
        return state.aboutCourse.courseDatails
    })
    const ref=useRef();
    const isOverflow=useIsOverflow(ref)
    const reviews=data.reviews
    const basedStyle={width:620}
    const{isExpanded,handleExpansion}=useExpansion();
    const style=isExpanded?basedStyle:{...basedStyle,maxHeight: 620,overflow:'hidden'}
    const renderedReviews=rating.map((rate)=>{
        return(
            <Box sx={{display:'flex'}}>
                <Typography sx={{mr:1,fontWeight:500,fontSize:16}}>{rate.rate} Stars</Typography>
                <PercentRangeBar color='#FFBA00' percentValue={rate.percent} width={260} height={9}></PercentRangeBar>

            </Box>
        )
    }

)
    const renderedUserReviews=reviews.map((userReview)=>{
        return(
            <Box
                sx={{mb:3}}>
                <Rating
                    name="read-only"
                    value={userReview.rating}
                    size={"small"}
                    precision={.5}
                    sx={{mt:1}}
                    readOnly
                    emptyIcon={<StarBorder
                        sx={{color:'#FFBA00'
                            ,fontSize:'large'
                            ,pt:.1}} />}
                />
                <Stack direction='row' alignItems='center' spacing={2}>
                    <Typography sx={{fontWeight:700,fontSize:20}}>{userReview.user.name}</Typography>
                    <Typography sx={{fontWeight:400,fontSize:16}}>{userReview.date}</Typography>
                </Stack>
                <Typography sx={{width:620,whiteSpace:'wrap',fontWeight:600,fontSize:16}}>{userReview.comment}
                </Typography>
            </Box>
        )
    })
    return(
        <Box id='3' sx={{ml:10,mt:3}}>
            <Typography variant='h3'>Reviews</Typography>

            <Stack direction='row' spacing={30} >
            <Box>
                <Stack direction='row' >
                    <Typography fontWeight={700} fontSize={54}>{data.final_rating_from_reviews}</Typography>
                    <Stack >
                    <Rating  value={data.final_rating_from_reviews} size={"medium"} precision={.5}  readOnly sx={{mt:2}} emptyIcon={<StarBorder
                        sx={{color:'#FFBA00'
                            ,fontSize:25
                            ,pt:.1}} />} />
                        <Typography sx={{fontWeight:500,fontSize:16}}>{data.reviews_number}
                            <span style={{fontWeight:400,fontSize:16,ml:1}}> Reviews</span>
                        </Typography>
                </Stack>
                </Stack>
                {renderedReviews}
            </Box>
            <Box sx={style} ref={ref}>
                {renderedUserReviews}
            </Box>
            </Stack>
            {isOverflow&& <CustomButton onClick={handleExpansion}
                      variant='outlined'
                      buttonText={isExpanded?'View Less Reviews':'View All Reviews'} >
        </CustomButton>}

        </Box>



    )
}
export default Reviews;