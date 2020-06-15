import React, { useState, useEffect } from 'react'
import { Container, CircularProgress } from '@material-ui/core'
import WordBar from '../components/WordBar';
import Keyboard from '../components/KeyBoard';
import NavBar from '../components/Navbar';
import Picture from '../components/Picture'
import StatusMessage from '../components/StatusMessage'
import firebase from '../firebase/firebase'
import { useStore } from '../store/store';
import { autorun } from 'mobx';


function Game() {
  const { game } = useStore()
  const [loadingWord, setloadingWord] = useState(true)

  function submitStreak(data) {
    if (game.streak > 0 && !game.isAdded) {
      firebase.db.collection('scores').add({
        username: data.username,
        streak: game.streak,
        created: new Date(),
        totalAttempts: game.totalAttempts,
      }).then(() => {
        game.getNewWord()
        game.isAdded = true
      }).catch((error) => {
        game.isAdded = false
        game.errorMessage = error.message
      })
    }
  }

  useEffect(() =>
    autorun(() => {
      if (game.loss) {
        game.showAnswer()
      }
    }), [game.loss]
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
        <NavBar submitStreak={submitStreak}/>
        <StatusMessage/>
    </Container>
  )
}

export default Game
