import * as React from 'react';
import { Container, Paper } from '@material-ui/core';
import { useEffect } from 'react';
import MediaCard from './MediaCard';

export default function PeopleList() {
  const paperStyle = {padding : '20px 20px 20px 40px', width : 400, margin: "30px auto" }
  const[persons, setPersons] = React.useState([])
  
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
      <h1>List of People</h1>
      <Paper elevation = {3} style = {paperStyle}>
          {persons.map(person => (
            <>
                <MediaCard id = {person.id} name = {person.name} address = {person.address} key = {person.id}/>
            </>
          ))}
      </Paper>
    </Container>
  );
}
