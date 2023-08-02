import './styles/searchBar.css'
import {BsSearch} from "react-icons/bs"
function SearchBar({placeholder}){
     return(
         <div >
             <form>
                 <span className='searchBar'>
                 <input className='searchBarInput' autoFocus={true} placeholder={placeholder} />
                     <button className='searchButton'><BsSearch className='icons'></BsSearch></button>
                 </span>
             </form>
         </div>
     )
}
export default SearchBar;