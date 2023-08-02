import {createContext, useState} from "react";
const EdugramContext=createContext()


function EdugramProvider({children}){
    const [open, setOpen] = useState(false);
    const handleOpen = () => {setOpen(true)};
    const handleClose = () => {setOpen(false)};
   const valueToShare={
       handleOpen,
       handleClose,
       open

    }
    return<EdugramContext.Provider value={valueToShare}>
        {children}
    </EdugramContext.Provider>
}
export {EdugramProvider}
export default EdugramContext
