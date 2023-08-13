import {createContext, useState} from "react";
const EdugramContext=createContext()


function EdugramProvider({children}){
    const [open, setOpen] = useState(false);
    const[clickedIndex,setClickedIndex]=useState(null)

    const handleOpen = () => {setOpen(true)};
    const handleClose = () => {setOpen(false)};
    const handleSlectedSubject=(index)=>{setClickedIndex(index)}
    const valueToShare={
       handleOpen,
       handleClose,
       open,clickedIndex,handleSlectedSubject

    }
    return<EdugramContext.Provider value={valueToShare}>
        {children}
    </EdugramContext.Provider>
}
export {EdugramProvider}
export default EdugramContext
