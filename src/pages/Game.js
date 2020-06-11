import React, { useState, useEffect } from 'react'
import { Container, CircularProgress } from '@material-ui/core'
import WordBar from '../components/WordBar';
import Keyboard from '../components/KeyBoard';
import NavBar from '../components/Navbar';
import getWord from '../Words/words'
import Picture from '../components/Picture'
import PlayerBar from '../components/PlayerBar'
import StatusMessage from '../components/StatusMessage'
import firebase from '../firebase/firebase'


function Game() {
  const [loadingWord, setloadingWord] = useState(true)
  const [word, setword] = useState([])
  const [wrongGuesses, setWrongGuesses] = useState([])
  const [correctGuesses, setCorrectGuesses] = useState([])
  const [hiddenWord, setHiddenWord] = useState([])
  const [attempts, setAttempts] = useState(5)
  const [win, setWin] = useState(false)
  const [loss, setLoss] = useState(false)
  const [addedStreak, setAddedStreak] = useState(null)
  const [streak, setStreak] = useState(0)
  const [isAdded, setIsAdded] = useState(false)
  const [totalAttempts, setTotalAttempts] = useState(0)

  useEffect(() => {
    setword(getWord())
    setloadingWord(false)
  }, [])

  useEffect(() => {
    let temp = []
    word.forEach((letter) => {
      if (correctGuesses.indexOf(letter) > -1 || letter === " ") {
        temp.push(letter)
      } else {
        temp.push('*')
      }
    })
    setHiddenWord(temp)
  }, [correctGuesses, word])

  useEffect(() => {
    const allLettersFound = word.every(letter => correctGuesses.includes(letter) || letter === " ")
    if (attempts === 0 && !allLettersFound) {
      setLoss(true)
    } else if (allLettersFound && word.length !== 0) {
      setWin(true)
    } 
  }, [correctGuesses, attempts, word])

  useEffect(() => {
    if(loss){
      showAnswer()
      console.log("test")
    }
  }, [loss])

  function showAnswer() {
    setLoss(true)
    let temp = []
    word.forEach(letter => temp.push(letter))
    setHiddenWord(temp)
  }

  function getNewWord() {
    if (win){
      setStreak(s => s + 1)
    }
    if (loss) {
      setStreak(0)
      setTotalAttempts(0)
      setIsAdded(false)
    }
    setword(getWord())
    setAttempts(5)
    setCorrectGuesses([])
    setWrongGuesses([])
    setWin(false)
    setLoss(false)
  }

  function onLetterClick(letter) {
    if (win || loss) {
      return
    }
    if ((word.indexOf(letter) > -1) && !(correctGuesses.indexOf(letter) > -1)) {
      setCorrectGuesses([...correctGuesses, letter])
    } else if (!(word.indexOf(letter) > -1) && !(wrongGuesses.indexOf(letter) > -1)) {
      setWrongGuesses([...wrongGuesses, letter])
      setAttempts(a => a - 1)
      setTotalAttempts(total => total + 1)
    }
  }

  function submitStreak(data) {
    if (streak > 0 && !isAdded) {
      firebase.db.collection('scores').add({
        username: data.username,
        streak,
        created: new Date(),
        totalAttempts,
      }).then(() => {
        getNewWord()
        setAddedStreak("added")
      }).catch((error) => {
        setAddedStreak(error.message)
      })
    }
  }

  if (loadingWord) {
    return(
      <Container maxWidth="md" disableGutters>
        <CircularProgress/>
      </Container>
    )
  }

  return (
    <Container maxWidth="md" disableGutters>
        <Picture attempts={attempts}/>
        <WordBar hiddenWord={hiddenWord} attempts={attempts} streak={streak} win={win} loss={loss}/>
        <Keyboard onLetterClick={onLetterClick} win={win} loss={loss}/>
        <NavBar showAnswer={showAnswer} newWord={getNewWord} win={win} loss={loss} streak={streak} submitStreak={submitStreak} isAdded={isAdded}/>
        <StatusMessage success={addedStreak}/>
    </Container>
  )
}

export default Game
