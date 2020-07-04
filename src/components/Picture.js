import React, { useState, useEffect } from 'react'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles/'
import statusImg1 from '../assets/1.svg'
import statusImg2 from '../assets/2.svg'
import statusImg3 from '../assets/3.svg'
import statusImg4 from '../assets/4.svg'
import statusImg5 from '../assets/5.svg'
import statusImg6 from '../assets/6.svg'
import statusImg7 from '../assets/7.svg'
import statusImg8 from '../assets/8.svg'
import { useObserver } from 'mobx-react-lite'
import { useStore } from '../store/store';

const useStyles = makeStyles(theme => ({
  paper:{
    paddingBottom: theme.spacing(1),
    textAlign: "center"
  },
  media: {
    height: "12em",
    [theme.breakpoints.down("md")]: {
      height: "10em"
    },
    [theme.breakpoints.down("xs")]: {
      height: "6em"
    }
  }
}));

const images = [statusImg8, statusImg7,statusImg6, statusImg5, statusImg4, statusImg3, statusImg2, statusImg1]

export default function Status() {
  const classes = useStyles()
  const { game } = useStore()

  return useObserver(() => (
    <Grid container justify="center">
      <Grid item xs={6}>
        <Paper className={classes.paper} elevation={1}>
          <img src={game.loss ? statusImg8 : (images[game.attempts] || statusImg1)} alt="Status" className={classes.media} />
        </Paper>
      </Grid>

    </Grid>

  ))
}
