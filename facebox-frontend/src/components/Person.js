import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Paper } from '@material-ui/core';
import { useEffect } from 'react';

export default function Person() {
  const paperStyle = {padding : '20px 20px', width : 400, margin: "30px auto" }
  const[name, setName] = React.useState('')
  const[address, setAddress] = React.useState('')

  const[persons, setPersons] = React.useState([])

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

  useEffect(() =>
  {
    fetch("http://localhost:8080/person/getAll")
    .then(res => res.json())
    .then((result) => {
      setPersons(result);
    }
  )
}, [])


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

      <h1>List of People</h1>
      <Paper elevation = {3} style = {paperStyle}>
          {persons.map(person => (
            <Paper elevation = {6} style = {{margin: "10px", padding: "15px", textAlign: "left"}} key = {person.id}>
              Id: {person.id}<br/>
              Name: {person.name}<br/>
              Address: {person.address}
              </Paper>
          ))}
      </Paper>
    </Container>
  );
}
