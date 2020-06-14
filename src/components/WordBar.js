import React, {useState, useEffect} from 'react'
import { Grid, Paper, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles/'
import Status from './Status';
import { useStore } from '../store/store';
import { useObserver } from 'mobx-react';

const useStyles = makeStyles(theme => ({
  letterContainer: {
    marginTop: "0.2rem",
    marginBottom: "0.2rem"
  },
  paper:{
    padding: theme.spacing(1),
  },
  paperLetter: {
    padding: theme.spacing(0.4),
    textAlign: "center",
    backgroundColor: theme.palette.common.hpGold
  },
  paperLetterEmpty: {
    padding: theme.spacing(2),
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1.5),
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0.5)
    },
  }
}));

function Word({hiddenWord, attempts, streak, color, streakColor, win, loss}) {
  const classes = useStyles();
  const store = useStore()

  // const [letterArray, setLetterArray] = useState([])

  // useEffect(() => {
  //   setLetterArray(hiddenWord) 
  // }, [hiddenWord]);

  return useObserver(() => (
    <Box pt={[1, 1.5, 2]}>
      <Grid item xs={12}>  
      <Paper className={classes.paper}>
        <Status attempts={attempts} streak={streak} color={color} win={win} loss={loss} streakColor={streakColor}/>
        <Grid container justify="center">
          {store.game.hiddenWord.map((letter, i) => (
            letter === ' ' ?
              <Paper key={`${letter}${i}`} className={classes.paperLetterEmpty} elevation={0} /> :
              <Grid key={`${letter}${i}`} className={classes.letterContainer}>
                <Paper className={classes.paperLetter} variant="outlined">
                  <Typography variant="h3">{letter}</Typography>
                </Paper>
              </Grid>
          ))}
        </Grid>
      </Paper>
    </Grid>

    </Box>
  ))
}

export default Word