import React, {useContext} from "react";
import Slider from "react-slick";
import {Box} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import './slider.css'

export default function MultipleItemSlider( {children,itemsNumber}) {
    const SlickButtonFix = ({currentSlide, slideCount, children, ...props}) => (
        <span {...props}>{children}</span>
    );
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: itemsNumber,
        slidesToScroll: 1,
        prevArrow:<SlickButtonFix style={{content:'none'}} > <ArrowBackIosNewIcon sx={{color: '#28A19C'}}></ArrowBackIosNewIcon></SlickButtonFix>,
        nextArrow: <SlickButtonFix><ArrowForwardIosIcon sx={{position:'relative',right:60,color: '#28A19C'}} ></ArrowForwardIosIcon></SlickButtonFix>,
    };
    return (
        <Box sx={{alignItems:'center'}}>
        <Slider  {...settings} style={{width:1300 ,left:105,alignItems:'center'}} >
           {children}
        </Slider>
        </Box>
    );
}