import React from 'react'
import { createStore } from './createStore'
import { useLocalStore } from 'mobx-react'
import getWord from '../Words/words'

const storeContext = React.createContext()

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    streak: 0,
    win: false,
    loss: false,
    attempts: 5,
    word: [],
    hiddenWord: [],
    correctGuesses: [],
    wrongGuesses: [],
    setNewWord: word => {
      const letterList = word.split('')
      store.word = letterList
      store.hiddenWord = letterList.map(letter => '*')
    },
    startNewRound: () => {
      store.setNewWord()
      if (store.win) {
        store.streak++
      }
      if (store.loss){
        store.streak = 0
      }
      store.attempts = 5
      store.correctGuesses = []
      store.wrongGuesses = []
      store.win = false
      store.loss = false
    },
    addLetter: letter => {
      if(store.word.indexOf(letter > -1) && !(store.correctGuesses.indexOf(letter) > -1)){
        store.correctGuesses.push(letter)
      } else if (!(store.word.indexOf(letter) > -1) && !(store.wrongGuesses.indexOf(letter) > -1)){
        store.wrongGuesses.push(letter)
        store.attempts--
      }
    },
    checkWin: () => {
      const allLettersFound = store.word.every(letter => store.correctGuesses.includes(letter) || letter === " ")
      if (store.attempts === 0 && !allLettersFound) {
        store.loss = true
      } else if (allLettersFound && store.word.length !== 0) {
        store.win = true
      } 
    },
    updateHiddenWord: () => {
      let temp = []
      store.word.forEach((letter) => {
        if (store.correctGuesses.indexOf(letter) > -1 || letter === " ") {
          temp.push(letter)
        } else {
          temp.push('*')
        }
      })
      store.hiddenWord = temp
    },
    showAnswer: () => {
      store.loss = true
      store.hiddenWord = store.word
    },
    incrementStreak: () => store.streak++,
    resetStreak: () => store.streak = 0
  }))
  return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export const useStore = () => {
  return React.useContext(storeContext)
}