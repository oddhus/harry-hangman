import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles/'
import Status from '../components/Status';
import Word from '../components/Word';
import Keyboard from '../components/KeyBoard';
import NavBar from '../components/Navbar';

function Game() {
  return (
    <Container maxWidth="md" disableGutters>
        <Status/>
        <Word />
        <Keyboard/>
        <NavBar/>
    </Container>
  )
}

export default Game
