import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

export default function MediaCard(props) {
  return (
    
    <Card sx={{ maxWidth: 345, margin: 2}}>
      <CardMedia
        sx={{ height: 300 }}
        image= {props.address ? props.address : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ID: {props.id}
        </Typography>
      </CardContent>
      <CardActions>
        <DeleteButton id = {props.id}/>
        <EditButton id = {props.id} name = {props.name} address = {props.address}/>
      </CardActions>
    </Card>
  );
}