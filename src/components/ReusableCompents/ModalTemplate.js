import {Box, Modal} from "@mui/material";

function ModalTemplate({children,handleClose,open,style}){
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