import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Paper } from '@material-ui/core';

const AddPerson = () => {

  const paperStyle = {padding : '20px 20px', width : 400, margin: "30px auto" }
  const[name, setName] = React.useState('')
  const[address, setAddress] = React.useState('')

  const handleSubmit= (e) => {
    e.preventDefault()
    if (!name) {
      alert("Name cannot be empty")
      return
    }
    const person = {name, address}
    fetch(
      "http://localhost:8080/person/add", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(person)
      }
    ).then(() => {
      alert(`${name} has been added`)
      setName('')
      setAddress('')
    })
  }

  return (
    <div>
      <Paper elevation = {3} style = {paperStyle}>
        <h1>Add a Person</h1>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1},
          }}
          noValidate
          autoComplete="off">

          <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth 
          required
          value = {name}
          onChange = {(e) => setName(e.target.value)}
          />

          <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth
          value = {address}
          onChange = {(e) => setAddress(e.target.value)}
          />
          <Button variant="contained" color = "primary" onClick = {handleSubmit}>
          Submit
          </Button>
        </Box>
      </Paper>
    </div>
  )
}

export default AddPerson