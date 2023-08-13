import {useState} from "react";
function useExpantion(){
    const[isExpanded,setIsExpanded]=useState(false)
    const handleExpansion=()=>{
        setIsExpanded(!isExpanded)
    }
    return{
        isExpanded,handleExpansion
    }
}
export default useExpantion;

