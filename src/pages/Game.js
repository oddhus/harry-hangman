import React, { useState, useEffect } from 'react'
import { Container, CircularProgress } from '@material-ui/core'
import WordBar from '../components/WordBar';
import Keyboard from '../components/KeyBoard';
import NavBar from '../components/Navbar';
import getWord from '../Words/words'
import Picture from '../components/Picture'

const streakColors = ["#fffde7", "#fff9c4", "#fff59d", "#fff176", "#ffee58", "#ffeb3b", "#fdd835", "#fbc02d", "#f9a825", "#f57f17"]

function Game() {
  const [color, setColor] = useState("#FAFAD2")
  const [loadingWord, setloadingWord] = useState(true)
  const [word, setword] = useState([])
  const [wrongGuesses, setWrongGuesses] = useState([])
  const [correctGuesses, setCorrectGuesses] = useState([])
  const [hiddenWord, setHiddenWord] = useState([])
  const [attempts, setAttempts] = useState(5)
  const [win, setWin] = useState(false)
  const [loss, setLoss] = useState(false)
  const [started, setStarted] = useState(false)
  const [streak, setStreak] = useState(0)
  const [streakColor, setStreakColor] = useState("grey")

  useEffect(() => {
    setword(getWord())
    setloadingWord(false)
    setStarted(true)
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
    if (started && attempts === 0 && !allLettersFound) {
      setLoss(true)
      setStreak(0)
    } else if (started && allLettersFound) {
      setWin(true)
      setStreak(streak + 1)
      setStarted(false)
    }
  }, [correctGuesses, attempts, word, started, streak])

  useEffect(() => {
    if (win){
      setColor("#c6ff00")
    } else if (loss) {
      setColor("#ff1744")
    } else {
      if (attempts >= 4) {
        setColor("#9ccc65")
      } else if (attempts >= 3) {
        setColor("#d4e157")
      } else if (attempts >= 2) {
        setColor("#ffca28")
      } else {
        setColor("#ef5350")
      }
    }
  }, [attempts, win, loss])

  useEffect(() => {
    if (streak < streakColors.length) {
      setStreakColor(streakColors[streak])
    }
  }, [streak])

  function showAnswer() {
    setLoss(true)
    let temp = []
    word.forEach(letter => temp.push(letter))
    setHiddenWord(temp)
  }

  function getNewWord() {
    setword(getWord())
    if (loss) {
      setStreak(0)
    }
    setAttempts(5)
    setCorrectGuesses([])
    setWrongGuesses([])
    setWin(false)
    setLoss(false)
    setStarted(true)
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
        <WordBar hiddenWord={hiddenWord} attempts={attempts} streak={streak} color={color} streakColor={streakColor} win={win} loss={loss}/>
        <Keyboard onLetterClick={onLetterClick} win={win} loss={loss}/>
        <NavBar showAnswer={showAnswer} newWord={getNewWord} win={win} loss={loss}/>
    </Container>
  )
}

export default Game
