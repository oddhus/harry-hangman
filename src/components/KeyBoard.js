import React, {useState, useEffect} from 'react'
import { Grid, Paper, Typography, Button, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles/'

const useStyles = makeStyles(theme => ({
  paper:{
    padding: theme.spacing(0.5),
    textAlign: "center",
  },
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
    <Box pt={[2, 4, 5]}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {letters.map((letter, i) => (
            <Box key={`${letter}${i}`} p={[0.3, 0.5, 1]}>
              <Button
                fullWidth
                className={classes.paper}
                variant="contained"
                size="small"
                fullWidth={true}
                onClick={() => {props.onLetterClick(letter); setClicked(clicked => [...clicked, letter])}}
                disabled={clicked.includes(letter) ? true : false}
              >
                <Typography variant="h6">{letter}</Typography>
              </Button>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  )
}