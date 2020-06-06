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
    textAlign: "center",
  },
  header:{
    backgroundColor: theme.palette.common.hpRed,
    color: theme.palette.common.hpGold
  }
}));


export default function Status(props) {
  const classes = useStyles();
  const [loss, setLoss] = useState(props.loss)
  const [win, setWin] = useState(props.win)
  const [attempts, setAttempts] = useState(props.attempts)
  const [color, setColor] = useState("#FAFAD2")
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

  useEffect(() => {
    if (props.attempts >= 4) {
      setColor("#006400")
    } else if (props.attempts >= 3) {
      setColor("#6B8E23")
    } else if (props.attempts >= 2) {
      setColor("#FF8C00")
    } else {
      setColor("#7f0000")
    }

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
                <Paper className={classes.paper} square>
                  <Typography className={classes.infoMessage}>{attempts} forsøk igjen</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>           
      </Grid>
  )
}
