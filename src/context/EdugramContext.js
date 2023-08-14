import {createContext, useState} from "react";
const EdugramContext=createContext()


function EdugramProvider({children}){
    const [userToken, setUserToken] = useState(localStorage.getItem('token'));

    const handleTokenChange = (newToken) => {
        setUserToken(newToken);
    }
    const valueToShare={
        userToken,
        handleTokenChange,

    }
    return<EdugramContext.Provider value={valueToShare}>
        {children}
    </EdugramContext.Provider>
}
export {EdugramProvider}
export default EdugramContext
