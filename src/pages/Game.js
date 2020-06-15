import React, { useState, useEffect } from 'react'
import { Container, CircularProgress } from '@material-ui/core'
import WordBar from '../components/WordBar';
import Keyboard from '../components/KeyBoard';
import NavBar from '../components/Navbar';
import Picture from '../components/Picture'
import StatusMessage from '../components/StatusMessage'
import { useStore } from '../store/store';
import { autorun } from 'mobx';


function Game() {
  const { game } = useStore()
  const [loadingWord, setloadingWord] = useState(true)

  useEffect(() =>
    autorun(() => {
      if (game.loss) {
        game.showAnswer()
      }
    }), []
  )

  useEffect(() => {
    game.startNewRound()
    setloadingWord(false)
  }, [])

  if (loadingWord) {
    return(
      <Container maxWidth="md" disableGutters>
        <CircularProgress/>
      </Container>
    )
  }

  return (
    <Container maxWidth="md" disableGutters>
        <Picture />
        <WordBar/>
        <Keyboard/>
        <NavBar/>
        <StatusMessage/>
    </Container>
  )
}

export default Game
