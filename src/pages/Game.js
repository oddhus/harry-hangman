import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles/'
import SimpleContainer from '../components/ui/SimpleContainer';
import Status from '../components/Status';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
    alignContent: "center"
  },
  pos: {
    marginBottom: 12,
  },
});


function Game() {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Status/>
      
    </Container>
  )
}

export default Game
