import * as React from 'react';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText } from '@material-ui/core';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function DeleteButton(props) {
  
  const [deleteOpen, setDeleteOpen] = React.useState(false);

  const handleDeleteOpen = () => {
    setDeleteOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const handleDelete = (e) => {
    e.preventDefault()
    fetch(
      `http://localhost:8080/person/delete/${props.id}`, {
        method: "DELETE",
      }
    ).then(() => {
      alert(`ID: ${props.id} has been deleted`)
      window.location.reload(true)
    })
    
    setDeleteOpen(false);
  };

return(
  <>
    <Button size = "small" variant="contained" color="secondary" onClick={handleDeleteOpen}>
      <DeleteForeverIcon />
    </Button>
    <Dialog
      open={deleteOpen}
      onClose={handleDeleteClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this item?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDeleteClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleDelete} color="secondary" autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  </>
  )
}