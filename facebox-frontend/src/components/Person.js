import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Paper } from '@material-ui/core';

export default function Person() {
  const paperStyle = {padding : '50px 20px', width : 600, margin: "20px auto" }
  const[name, setName] = React.useState('')
  const[address, setAddress] = React.useState('')

  const handleClick = (e) => {
    e.preventDefault()
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
    <Container>
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
          value = {name}
          onChange = {(e) => setName(e.target.value)}
          />

          <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth
          value = {address}
          onChange = {(e) => setAddress(e.target.value)}
          />
          <Button variant="contained" color = "primary" onClick = {handleClick}>
          Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
