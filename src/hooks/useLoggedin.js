import {useState} from "react";
function useLoggedin(){
    const[userToken,setUserToken]=useState(localStorage.getItem('token'))
    const handleTokenChange = (newToken) => {
        setUserToken(newToken);
    }
    return{
        userToken,handleTokenChange
    }
}
export default useLoggedin;

