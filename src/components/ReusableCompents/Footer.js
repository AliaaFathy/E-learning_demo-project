import {Box, List, ListItem, Stack, Typography} from "@mui/material";
import Logo2 from "../../images/Pattern-fill-d434ba3329b32cd47e54ab809186b46a.jpg"
import facebook from '../../images/facebook.png'
import twitter from '../../images/twitter.png'
import youtube from '../../images/youtube.png'
import linkedIn from '../../images/linkedin-rect.png'
import whatsapp from '../../images/whatsapp.png'
import {useLocation} from "react-router-dom";
function Footer(){
    const logo=[facebook,twitter,youtube,linkedIn,whatsapp]
    const location=useLocation()

    const renderedLogo=logo.map((source,index)=>{
        return <img src={source} alt='logo' style={{width:23.16,height:23.16,marginTop:8}} key={index}/>
    })
    return(
        <Box component="div" sx={{height:350,mt:10,position:'relative'}}>
        <Box component="div" sx={{background:'white',height:300,mt:10}}>
            <Stack spacing={20} direction='row' sx={{pt:5,ml:10}}>
            <Stack spacing={3} >
            <img src={Logo2} style={{width:266,height:59}}/>
            <Typography  sx={{width:270,height:96,fontSize:'13',
                fontWeight:600,opacity:'75%',color:'#343434'}}>Discover the fastest,
                most effective way to build your skills with courses, <br/>certificates, and degrees.<br/>Get started with us.
            </Typography>
            <Stack direction='row' spacing={4}  >
                {renderedLogo}
            </Stack>
            </Stack>
            <Stack spacing={2} >
                <Typography variant='body3' sx={{color:'#28A19C'}}>Sitemap</Typography>
                <Typography variant='body3'  sx={location.pathname==='/'? {color:'#FFBA00'}:{}}>Home</Typography>
                <Typography variant='body3'>About us </Typography>
                <Typography variant='body3'>Contact us</Typography>
            </Stack>
            <Stack spacing={2}>
                <Typography variant='body3' sx={{color:'#28A19C'}}>Our Clients</Typography>
                <Typography variant='body3' >IBM</Typography>
                <Typography variant='body3'>Intel </Typography>
                <Typography variant='body3'>Apple</Typography>
            </Stack>
            <Stack spacing={2}>
                <Typography variant='body3' sx={{color:'#28A19C'}}>Support</Typography>
                <Typography variant='body3' >Terms & Conditions</Typography>
                <Typography variant='body3'>Privacy Policy</Typography>
            </Stack>
            </Stack>
        </Box>
            <Typography  sx={{position:'absolute',width:269,height:18,mt:2,fontFamily:'Quicksnad',fontSize:'13',
                fontWeight:600,opacity:'75%',color:'#343434',ml:70}}>Designed and developed at inova LLC
            </Typography>
        </Box>

        )

}
export default Footer;