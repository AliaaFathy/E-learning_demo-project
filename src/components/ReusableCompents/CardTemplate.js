import {Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function CardTemplate({media,content,action,...rest}){
     return(
         <Card  sx={{ width: 272,mt:8,ml:10 ,
             boxShadow: '0px 3px 6px 0px #00000029',borderRadius:5}}>
             <CardActionArea  >
                 <CardMedia  >
                     {media}
                 </CardMedia>
                 <CardContent {...rest} >
                     {content}
                 </CardContent>
             </CardActionArea >
             <CardActions >
                 {action}
             </CardActions>
         </Card>)
}
export default CardTemplate