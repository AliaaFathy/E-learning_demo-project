import { GoChevronDown } from "react-icons/go";
import './styles/DropDown.css'

function DropDown({content}){
    return(
        <div className='dropDown'>
            <span className='selectedOption'>
                {content}
            </span>
            <button className='dropDown-button'><GoChevronDown></GoChevronDown></button>
        </div>
    )
}
export default DropDown;