import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import './../css/CourseCard.css';


export default function BasicCard({course}) {
    console.log(course); 
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent className="CourseCardContent">
      <Grid container spacing={2}>
  <Grid item xs={12} md={8}>
  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {course.category} {course.number}
        </Typography>
        <Grid container>
        <Grid item xs={12} md={6}>
        <Typography variant="h5" component="div">
          {course.name}
        </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {course.faculty}
        </Typography>
        </Grid>
        </Grid>
  </Grid>
  <Grid item xs={6} md={4} className="CourseRating">
  <Typography variant="h5" component="div">
          {course.rating}(19)
        </Typography>
  </Grid>
  <Grid item xs={6} md={3} className="CourseBG">
  <Typography variant="h5" component="div">
          {course.diff}
        </Typography>
  </Grid>
  <Grid item xs={4} md={3} className="CourseBG">
  <Typography variant="h5" component="div">
          {course.grade}
        </Typography>
  </Grid>
  <Grid item xs={4} md={3} className="CourseBG">
  <Typography variant="h5" component="div">
          {course.workload}hr/week
        </Typography>
  </Grid>
  <Grid item xs={4} md={3} className="CourseBG">
  <Typography variant="h5" component="div">
          {course.rec}%
        </Typography>
  </Grid>
</Grid>
  
      </CardContent>
    </Card>
  );
}

