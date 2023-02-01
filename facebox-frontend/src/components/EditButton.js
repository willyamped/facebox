import * as React from 'react';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText } from '@material-ui/core';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function EditButton(props) {
  
  const [EditOpen, setEditOpen] = React.useState(false);
  const[name, setName] = React.useState(props.name)
  const[url, setUrl] = React.useState(props.url)

  const handleEditOpen = () => {
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleEdit = (e) => {
    e.preventDefault()
    const person = {name, url}
    if (!name) {
      alert("Name cannot be empty")
      return
    }
    fetch(
      `http://localhost:8081/person/update/${props.id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(person)
      }
    ).then(() => {
      alert(`${props.id} has been edited`)
      setName('')
      setUrl('')
      window.location.reload(true)
    })
    
    setEditOpen(false);
  };

return(
  <>
    <Button size = "small" variant="contained" color="primary" onClick={handleEditOpen}>
      <EditIcon />
    </Button>
    <Dialog
      maxwidth = 'md'
      open={EditOpen}
      onClose={handleEditClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Confirm Edit"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to Edit this item?
        </DialogContentText>
      </DialogContent>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1},
          width: 30
        }}
        noValidate
        autoComplete="off">

        <TextField id="outlined-basic" label="Name" variant="outlined" style = {{width: 300}}
        value = {name}
        onChange = {(e) => setName(e.target.value)}
        />

        <TextField id="outlined-basic" label="Image URL" variant="outlined" style = {{width: 300}}
        value = {url}
        onChange = {(e) => setUrl(e.target.value)}
        />
      </Box>
      <DialogActions>
        <Button onClick={handleEditClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleEdit} color="primary" autoFocus>
          Edit
        </Button>
      </DialogActions>
    </Dialog>
  </>
  )
}