import React, {useState, useEffect} from 'react'
import { Grid, Paper, Typography, Button, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles/'

const useStyles = makeStyles(theme => ({
  paper:{
    padding: theme.spacing(0),
    textAlign: "center",
  },
  button:{
    flex: "inline",
    minWidth: "3em",
    minHeight: "0.5em"
  }
}));

const letters = Array(26).fill(65).map((x,y) => String.fromCharCode(x+y))
letters.push('Æ', 'Ø', 'Å')

export default function Keyboard(props) {
  const classes = useStyles();

  const [clicked, setClicked] = useState([])

  useEffect(() => {
    if(!props.win && !props.loss){
      setClicked([])
    }
  }, [props.win, props.loss])

  return (
    <Box pt={[1, 2.5, 3]}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
        <Grid container justify="center" spacing={0}>
          {letters.map((letter, i) => (
            <Box key={`${letter}${i}`} p={[0.3, 0.4, 0.1]}>
              <Button
                className={classes.button}
                variant="outlined"
                onClick={() => {props.onLetterClick(letter); setClicked(clicked => [...clicked, letter])}}
                disabled={clicked.includes(letter) ? true : false}
              >
                <Typography variant="h6">{letter}</Typography>
              </Button>
            </Box>
          ))}
        </Grid>
        </Paper>
      </Grid>
    </Box>
  )
}