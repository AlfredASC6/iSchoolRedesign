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
  borderRadius: 15,

};

export default function PeopleModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{props.name}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            {props.name}
          </Typography>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            {props.tagline}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.title}
          </Typography>
          <img src={props.imagePath} alt="" />
         {props.website &&
         
         <Typography id="modal-modal-web" variant="h4" component="h2">
            Website <a href= {props.website}> {props.website}</a>
          </Typography>}

          <Typography id = "modal-modal-interest" variant="h5" compnent="p">
            Speical Interests: {props.interestArea}
          </Typography>

          <Typography id = "modal-modal-office" variant = "p" component = "h3">Office: {props.office}</Typography>

          <Typography id = "modal-modal-phone" variant = "p" component = "h3">Phone Number: {props.phone}</Typography>

          <Typography id = "modal-modal-email" variant = "p" component = "h3">Email: {props.email}</Typography>

          {
            props.twitter &&

            <Typography id = "modal-modal-twitter" variant = "p" component = "h3"><p>Twitter: {props.twitter}</p></Typography>
          }

          {
            props.facebook && 
            <Typography id = "modal-modal-facebook" variant = "p" component = "h3"><p>Facebook: {props.facebook}</p></Typography>
          }
        </Box>
      </Modal>
    </div>
  );
}
