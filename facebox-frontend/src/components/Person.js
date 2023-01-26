import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@material-ui/core';

export default function Person() {
  const paperStyle = {padding : '50px 20px', width : 600, margin: "20px auto" }
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
          <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth/>
          <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth/>
        </Box>
      </Paper>
    </Container>
  );
}
