import React from 'react'
import { Grid, Paper, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles/'

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
  },
  infoHeader: {
    ...theme.typography.h6
  },
  infoMessage: {
    ...theme.typography.h5
  },
  paper:{
    padding: theme.spacing(2),
    textAlign: "center",
  },
  header:{
    backgroundColor: theme.palette.common.hpRed,
    color: theme.palette.common.hpGold
  },
  pos: {
    marginBottom: 12,
  },
  statusText: {

  }
}));


export default function Status() {
  const classes = useStyles();

  return (
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={0}>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <Paper className={classes.header} square>
                  <Typography className={classes.infoHeader}>Streak</Typography>
                </Paper>
                <Paper className={classes.paper} square>
                  <Typography className={classes.infoMessage}>3</Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.header} square>
                  <Typography className={classes.infoHeader}>Status</Typography>
                </Paper>
                <Paper className={classes.paper} square>
                  <Typography className={classes.infoMessage}>5 forsøk igjen</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>           
      </Grid>
  )
}
