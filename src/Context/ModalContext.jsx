import { Box, Typography } from "@mui/material";
import { Modal } from "bootstrap";
import { createContext, useState } from "react";

const ModalContext = createContext({
  Clients: () => {},
  hideModal: () => {},
});

export function ModalProvider(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let data = {
    Clients: handleOpen,
  };


  
  return (
    <ModalProvider.Provider value={data}>
         {props.children}
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
     
    </ModalProvider.Provider>
  );
}
export default ModalProvider;