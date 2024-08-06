import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
    overflowY: 'scroll',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 500 ,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: 'black',
    borderRadius: 15,
  };


  
export default function MinorModal(props){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div>
            <Button onClick={handleOpen}>{props.name}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

            <Box sx = {style}>
                <Typography className='minor-Node'>Name: {props.name}</Typography>
                <br></br>
                <Typography>Title: {props.title}</Typography>
                <br></br>
                <Typography>Description: {props.description}</Typography>
                <br></br>
                <Typography>Courses: {props.courses}</Typography>
                <br></br>
                {/* adding this to see if the note key exists */}
                {props.note &&
                    
                    <Typography>Note: {props.note}</Typography>
                }
            </Box>

            </Modal>

            
        </div>
    )
}