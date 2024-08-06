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
    color: 'black',
    borderRadius: 15
  };

export default function DegreesModal(props){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div>
            <Button onClick={handleOpen}>{props.degreeName}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

            <Box sx = {style}>


                {
                    props.degreeName &&    
                    <Typography>Degree Name: {props.degreeName}</Typography>
                }
                {
                    props.title &&
                    <Typography>Title: {props.title}</Typography>
                }

                {
                    props.description &&
                    <Typography>Description: {props.description}</Typography>
                }

                {
                    props.concentrations &&
                    <Typography>Concentrations: {props.concentrations}</Typography>
                }

                {
                    props.availableCertificates &&
                    <Typography>Available Certificates: {props.availableCertificates}</Typography>

                }
            </Box>

            </Modal>

            
        </div>
    )
}