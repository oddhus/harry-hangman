import React from 'react'
import { Grid, Typography, Button, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles/'
import { useStore } from '../store/store';
import { useObserver } from 'mobx-react';

const useStyles = makeStyles(theme => ({
  button:{
    flex: "inline",
    minWidth: "3em",
    minHeight: "0.5em"
  }
}));

const letters = Array(26).fill(65).map((x,y) => String.fromCharCode(x+y))
letters.push('Æ', 'Ø', 'Å')

export default function Keyboard() {
  const classes = useStyles();
  const store = useStore()

  return useObserver(() => (
    <Box pt={[1, 2.5, 3]}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={0}>
          {letters.map((letter, i) => (
            <Box key={`${letter}${i}`} p={[0.3, 0.4, 0.1]}>
              <Button
                className={classes.button}
                variant="outlined"
                onClick={() => store.game.addLetter(letter)}
                disabled={(store.game.correctGuesses.includes(letter) || store.game.wrongGuesses.includes(letter))}
              >
                <Typography variant="h6">{letter}</Typography>
              </Button>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  ))
}