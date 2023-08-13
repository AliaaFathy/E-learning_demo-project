import {
    Box,
    Button,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Card,
    CardActions,
    Stack
} from "@mui/material";
import {useNavigate} from "react-router-dom";


import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CardTemplate from "./CardTemplate";

function CertificateCard({certificate}){
    const navigate=useNavigate()
    const media=<Box sx={{boxShadow: '0px 3px 6px 0px #00000029',display:'flex',alignItems:'center',height:251,justifyContent:'center' }}>
        <img src={certificate.imageUrl} sx={{width:94,height:94}} alt='certificate'/>
    </Box>
    const content=
        <Typography variant='body2'   >
            {certificate.certificateName}
        </Typography>
    const action=
        <Typography variant='body2' >
            {certificate.owner}
        </Typography>
    return(<CardTemplate
        onClick={navigate('/about')}
        content={content}
        action={action}
        media={media}>
    </CardTemplate>)
}
export default CertificateCard;