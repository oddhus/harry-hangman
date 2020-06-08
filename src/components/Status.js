import React, { useState, useEffect } from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles/'
import InfoTile from './InfoTile';

const useStyles = makeStyles(theme => ({
  paper:{
    paddingBottom: theme.spacing(1),
    textAlign: "center"
  }
}));

const streakColors = ["#fffde7", "#fff9c4", "#fff59d", "#fff176", "#ffee58", "#ffeb3b", "#fdd835", "#fbc02d", "#f9a825", "#f57f17"]
const attemptColors = ["#ef5350","#ef5350","#ffca28","#d4e157","#d4e157","#9ccc65"]

export default function Status(props) {
  const classes = useStyles();
  const [statusText, setStatusText] = useState("")
  const [streak, setStreak] = useState()
  const [color, setColor] = useState("#9ccc65")
  const [streakColor, setStreakColor] = useState("#fffde7")

  useEffect(() => {
    setStreak(props.streak)
  }, [props.streak])

  useEffect(() => {
    let text = <Typography variant="h5">{props.attempts} forsøk igjen</Typography>
    if (props.win){
      text = <Typography variant="h5">Magisk!</Typography>
    } else if (props.loss){
      text = <Typography variant="h5">Trollsnørr! </Typography>
    }
    setStatusText(text)
  }, [props.win, props.loss, props.attempts])

  useEffect(() => {
    if (props.win){
      setColor("#c6ff00")
    } else if (props.loss) {
      setColor("#ff1744")
    } else {
      setColor(attemptColors[props.attempts])
    }
  }, [props.attempts, props.win, props.loss])

  useEffect(() => {
    if (props.streak < streakColors.length) {
      setStreakColor(streakColors[props.streak])
    }
  }, [props.streak])


  return (
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={0}>
            <Grid container spacing={2}>
              <InfoTile color={streakColor} size={6}>
                <Typography variant="h5">Streak: {streak}</Typography>
              </InfoTile>
              <InfoTile color={color} size={6}>
                {statusText}
              </InfoTile>
            </Grid>
          </Paper>           
      </Grid>
  )
}
