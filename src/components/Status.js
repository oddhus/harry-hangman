import React, { useState, useEffect } from 'react'
import { Grid, Paper, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles/'

const useStyles = makeStyles(theme => ({
  paper:{
    paddingBottom: theme.spacing(1),
    textAlign: "center"
  },
  headerStatus:{
    backgroundColor: props => props.color
  },
  headerStreak:{
    backgroundColor: props => props.streakColor,
  }

}));


export default function Status(props) {
  const classes = useStyles(props);
  const [statusText, setStatusText] = useState("")
  const [streak, setStreak] = useState(props.streak)

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

  console.log(props.loss)
  return (
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={0}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Paper className={classes.headerStreak} square>
                  <Typography variant="h5">Streak: {streak}</Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.headerStatus}>
                  {statusText}
                </Paper>
              </Grid>
            </Grid>
          </Paper>           
      </Grid>
  )
}
