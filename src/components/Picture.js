import React, { useState, useEffect } from 'react'
import { Grid, Paper, Typography, Box, Container,Card, CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles/'
import statusImg1 from '../assets/1.svg'
import statusImg2 from '../assets/2.svg'
import statusImg3 from '../assets/3.svg'
import statusImg4 from '../assets/4.svg'
import statusImg5 from '../assets/5.svg'
import statusImg6 from '../assets/6.svg'


const useStyles = makeStyles(theme => ({
  paper:{
    paddingBottom: theme.spacing(1),
    textAlign: "center"
  },
  media: {
    height: "14em",
    [theme.breakpoints.down("md")]: {
      height: "12em"
    },
    [theme.breakpoints.down("xs")]: {
      height: "6em"
    }
  }
}));

const images = [statusImg1, statusImg2, statusImg3, statusImg4, statusImg5, statusImg6]
const maxAttempts = 5;

export default function Status(props) {
  const classes = useStyles()
  const [currentImg, setCurrentImg] = useState(0)

  useEffect(() => {
    const status = maxAttempts - props.attempts
    setCurrentImg(status)
  }, [props.attempts])

  return (
    <Grid container justify="center">
      <Grid item xs={6}>
        <Paper className={classes.paper} elevation={1}>
          <img src={images[currentImg] || statusImg1} alt="Status" className={classes.media} />
        </Paper>
      </Grid>

    </Grid>

  )
}
