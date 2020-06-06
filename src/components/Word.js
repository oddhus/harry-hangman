import React, {useState, useEffect} from 'react'
import { Grid, Paper, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles/'

const useStyles = makeStyles(theme => ({
  letterText: {
    ...theme.typography.responsiveSize
  },
  paper:{
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5,
  },
  paperLetter: {
    padding: theme.spacing(0.5),
    textAlign: "center",
  },
  paperLetterEmpty: {
    padding: theme.spacing(1.5),
    textAlign: "center",
  },
  header:{
    backgroundColor: theme.palette.common.hpRed,
    color: theme.palette.common.hpGold
  },
  statusText: {

  }
}));

function Word({hiddenWord}) {
  const classes = useStyles();

  const test = "AVADA KADAVRA ".split('')

  const [letterArray, setLetterArray] = useState([])

  useEffect(() => { setLetterArray(hiddenWord) }, [hiddenWord]);

  return (
      <Grid item xs={12}>
          <Paper classes={{root: classes.paper}}>
            <Grid container justify="center" spacing={4}>
                {test.map((letter, i) => (
                  letter === ' ' ?
                    <Paper key={`${letter}${i}`} className={classes.paperLetterEmpty} elevation={0} /> :
                      <Grid key={`${letter}${i}`}>
                        <Paper  className={classes.paperLetter} variant="outlined">
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