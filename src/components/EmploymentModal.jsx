import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: 'white'
  };

export default function EmploymentModal(props){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div>
            <Button onClick={handleOpen}>{props.coopTable}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

            <Box sx = {style}>

            <Typography>Co-op Information:</Typography>
            <Typography>{props.employer}</Typography>
            <Typography>{props.degree}</Typography>
            <Typography>{props.city}</Typography>
            <Typography>{props.term}</Typography>
            </Box>

            </Modal>

            
        </div>
    )
}