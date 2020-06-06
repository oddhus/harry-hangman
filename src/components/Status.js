import React, { useState, useEffect } from 'react'
import { Grid, Paper, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles/'

const useStyles = makeStyles(theme => ({
  infoHeader: {
    ...theme.typography.h6
  },
  infoMessage: {
    ...theme.typography.h5
  },
  paper:{
    padding: theme.spacing(1),
    textAlign: "center"
  },
  paperStatus:{
    padding: theme.spacing(1),
    textAlign: "center",
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",

    color: props => props.color
  },
  header:{
    backgroundColor: theme.palette.common.hpRed,
    color: theme.palette.common.hpGold
  }
}));


export default function Status(props) {
  const classes = useStyles(props);
  const [loss, setLoss] = useState(props.loss)
  const [win, setWin] = useState(props.win)
  const [attempts, setAttempts] = useState(props.attempts)
  const [streak, setStreak] = useState(props.streak)

  useEffect(() => {
    setStreak(props.streak)
  }, [props.streak])

  useEffect(() => {
    setLoss(props.loss)
  }, [props.loss])

  useEffect(() => {
    setWin(props.win)
  }, [props.win])

  useEffect(() => {
    setAttempts(props.attempts)
  }, [props.attempts])

  return (
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={0}>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <Paper className={classes.header} square>
                  <Typography className={classes.infoHeader}>Streak</Typography>
                </Paper>
                <Paper className={classes.paper} square>
                  <Typography className={classes.infoMessage}>{streak}</Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.header} square>
                  <Typography className={classes.infoHeader}>Status</Typography>
                </Paper>
                <Paper className={classes.paperStatus} square>
                  <Typography className={classes.infoMessage}>{attempts} forsøk igjen</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>           
      </Grid>
  )
}
