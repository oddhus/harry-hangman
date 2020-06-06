import React, {useState, useEffect} from 'react'
import { Grid, Paper, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles/'

const useStyles = makeStyles(theme => ({
  paper:{
    ...theme.mixins.gutters(),
    padding: theme.spacing(2),
    margin: "10px",
    backgroundColor: theme.palette.common.hpRed
  },
  paperLetter: {
    padding: theme.spacing(0.4),
    textAlign: "center",
    backgroundColor: theme.palette.common.hpGold
  },
  paperLetterEmpty: {
    padding: theme.spacing(1),
    textAlign: "center",
    backgroundColor: theme.palette.common.hpRed
  }
}));

function Word({hiddenWord}) {
  const classes = useStyles();

  const [letterArray, setLetterArray] = useState([])

  useEffect(() => {
    // let words = []
    // let index = 0
    // hiddenWord.forEach((letter, i) => {

    // });
    setLetterArray(hiddenWord) 
  }, [hiddenWord]);

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Grid container justify="center">
          {letterArray.map((letter, i) => (
            letter === ' ' ?
              <Paper key={`${letter}${i}`} className={classes.paperLetterEmpty} elevation={0} /> :
              <Grid key={`${letter}${i}`}>
                <Paper className={classes.paperLetter} variant="outlined" square>
                  <Typography variant="h3">{letter}</Typography>
                </Paper>
              </Grid>
          ))}
        </Grid>
        </Paper>
    </Grid>
  )
}

export default Word