import './styles/card.css'
import {Box} from "@mui/material";
import {useNavigate} from "react-router-dom";
function Card(){
 const navigate=useNavigate()
    return(<Box onClick={()=>navigate('about')} className='card-container'>
        <div className='course-image'></div>
        <span className='course-title'></span>
        <span className='rate'></span>
        <span className='owner'></span>
        <span className='about-course'></span>
        <span className='see-more'>...see more</span>
        <span className='current-price'></span>
        <span className='old-price'></span>
        <div className='get-course-container'></div>


    </Box>)
}
export default Card;