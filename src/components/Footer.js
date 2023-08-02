import {Box, List, ListItem, Typography} from "@mui/material";
import Logo2 from "../images/Pattern-fill-d434ba3329b32cd47e54ab809186b46a.jpg"
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import youtube from '../images/youtube.png'
import linkedIn from '../images/linkedin-rect.png'
import whatsapp from '../images/whatsapp.png'
import {useState} from "react";



function Footer(){
    const logo=[facebook,twitter,youtube,linkedIn,whatsapp]
    const renderedLogo=logo.map((source,index)=>{
        return <img src={source} alt='logo' style={{width:23.16,height:23.16,position:'absolute',marginRight:25}} key={index}/>
    })
    return(
        <Box component="div" sx={{height:422,mt:10,position:'relative'}}>
        <Box component="div" sx={{background:'white',height:372,mt:10}}>
            <img src={Logo2} style={{width:266,height:59,position:"absolute",marginTop:56,marginLeft:40}}/>
            <Typography  sx={{position:'absolute',width:240,height:96,mt:17,fontFamily:'Quicksnad',fontSize:'13',
                fontWeight:600,opacity:'75%',color:'#343434',ml:7}}>Discover the fastest,
                most effective way to build your skills with courses, <br/>certificates, and degrees.<br/>Get started with us.
            </Typography>
            <Box component="div" sx={{display:'flex',ml:6.5,mt:35,position:'absolute'}}>
                {renderedLogo}
            </Box>
            <List sx={{fontFamily:'Quicksand',fontSize:20,fontWeight:600,color:'#343434',ml:60,mt:5,position:'absolute'}}>
                <ListItem sx={{color:'#28A19C'}}>Sitemap</ListItem>
                <ListItem  sx={{color:'#FFBA00'}}>Home</ListItem>
                <ListItem>About us </ListItem>
                <ListItem>Contact us</ListItem>
            </List>
            <List sx={{fontFamily:'Quicksand',fontSize:20,fontWeight:600,color:'#343434',ml:90,mt:5,position:'absolute'}}>
                <ListItem sx={{color:'#28A19C'}}>Our Clients</ListItem>
                <ListItem >IBM</ListItem>
                <ListItem>Intel </ListItem>
                <ListItem>Apple</ListItem>
            </List>
            <List sx={{fontFamily:'Quicksand',fontSize:20,fontWeight:600,color:'#343434',ml:120,mt:5,position:'absolute'}}>
                <ListItem sx={{color:'#28A19C'}}>Support</ListItem>
                <ListItem >Terms & Conditions</ListItem>
                <ListItem>Privacy Policy</ListItem>
            </List>
        </Box>
            <Typography  sx={{position:'absolute',width:269,height:18,mt:2,fontFamily:'Quicksnad',fontSize:'13',
                fontWeight:600,opacity:'75%',color:'#343434',ml:70}}>Designed and developed at inova LLC
            </Typography>
        </Box>

        )

}
export default Footer;