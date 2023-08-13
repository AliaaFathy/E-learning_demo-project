import {useContext} from "react";
import EdugramContext from "../../context/EdugramContext";
import {Box, Modal} from "@mui/material";

function ModalTemplate({children,style}){
    const{handleClose,open}=useContext(EdugramContext)
    return(
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description" sx={{backdropFilter:'blur(3px)'}}>
            <Box sx={style}>
                {children}
            </Box>
        </Modal>
            )
}
export default ModalTemplate;