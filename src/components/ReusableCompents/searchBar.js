import {Button, Stack, TextField} from "@mui/material";
import searchIcon from '../../images/search.png'
function SearchBar({placeholder}){
     return(

                 <Stack direction='row' alignItems='center'>
                     <TextField  size="small" placeholder={placeholder} sx={{width:612}} />
                     <Button variant='contained' sx={{height:40,right:60}}><img src={searchIcon} alt='search'/></Button>
                 </Stack>

     )
}
export default SearchBar;