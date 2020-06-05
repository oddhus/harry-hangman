import React from 'react'
import { Grid, Paper, Container, Box, Card, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles/'

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
    alignContent: "center"
  },
  paper:{
    padding: theme.spacing(3),
    textAlign: "center"
  },
  header:{
    backgroundColor: theme.palette.common.hpRed,
    color: theme.palette.common.hpGold
  },
  pos: {
    marginBottom: 12,
  },
}));


export default function Status() {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper className={classes.paper} variant="outlined">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Paper className={classes.header} square>
                <Typography variant="h5">Streak</Typography>
              </Paper>
              <Paper className={classes.paper} square>5</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.header} square>
                <Typography variant="h5">Status</Typography>
              </Paper>
              <Paper className={classes.paper} square>5 forsøk igjen</Paper>
            </Grid>
          </Grid>
        </Paper>    
      </Grid>
    </Grid>  
  )
}
