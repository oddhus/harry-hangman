import React, { useState, useEffect } from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles/'
import InfoTile from './InfoTile';
import { useStore } from '../store/store';
import { useObserver } from 'mobx-react';

const useStyles = makeStyles(theme => ({
  paper:{
    paddingBottom: theme.spacing(1),
    textAlign: "center"
  }
}));

const streakColors = ["#fffde7", "#fff9c4", "#fff59d", "#fff176", "#ffee58", "#ffeb3b", "#fdd835", "#fbc02d", "#f9a825", "#f57f17"]
const attemptColors = ["#ef5350","#ef5350","#ffca28","#d4e157","#d4e157","#9ccc65"]

export default function Status(props) {
  const store = useStore()
  const classes = useStyles();
  const [color, setColor] = useState("#9ccc65")
  const [streakColor, setStreakColor] = useState("#fffde7")

  useEffect(() => {
    if (store.win){
      setColor("#c6ff00")
    } else if (store.loss) {
      setColor("#ff1744")
    } else {
      setColor(attemptColors[store.attempts])
    }
  }, [store.attempts, store.win, store.loss])

  useEffect(() => {
    if (store.streak < streakColors.streak) {
      setStreakColor(streakColors[store.streak])
    }
  }, [store.streak])

  return useObserver(() => (
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={0}>
            <Grid container spacing={2}>
              <InfoTile color={streakColor} size={6}>
                <Typography variant="h5">Streak: {store.streak}</Typography>
              </InfoTile>
              <InfoTile color={color} size={6}>
                <Typography variant="h5">
                  {store.win ? "Magisk!" :
                    store.loss ? "Trollsnørr!" :
                      `${store.attempts} forsøk igjen`}</Typography>
              </InfoTile>
            </Grid>
          </Paper>           
      </Grid>
  ))
}
