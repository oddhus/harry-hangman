import getWord from '../Words/words'

export function gameStore() {
  // note the use of this which refers to observable instance of the this
  return {
    streak: 0,
    win: false,
    loss: false,
    attempts: 7,
    totalAttempts: 0,
    word: ['h','e','i'],
    hiddenWord: ['h','e','i'],
    correctGuesses: [],
    wrongGuesses: [],
    isAdded: false,
    errorMessage: null,
    setIsAdded(value) {
      this.isAdded = value
    },
    setNewWord(){
      const word = getWord()
      this.word = word
      this.hiddenWord = word.map(letter => letter !== ' ' ? '*' : ' ')
    },
    startNewRound(){
      if (this.loss || this.isAdded){
        this.streak = 0
        this.totalAttempts = 0
      }
      this.setNewWord()
      this.attempts = 7
      this.correctGuesses = []
      this.wrongGuesses = []
      this.win = false
      this.loss = false
    },
    addLetter(letter){
      if(this.word.indexOf(letter) > -1 && !(this.correctGuesses.indexOf(letter) > -1)){
        this.correctGuesses.push(letter)
        this.updateHiddenWord()
      } else if (!(this.word.indexOf(letter) > -1) && !(this.wrongGuesses.indexOf(letter) > -1)){
        this.wrongGuesses.push(letter)
        this.attempts--
        this.totalAttempts++
      }
      this.checkWin()
    },
    checkWin() {
      const allLettersFound = this.word.every(letter => this.correctGuesses.includes(letter) || letter === " ")
      if (this.attempts === 0 && !allLettersFound) {
        this.loss = true
      } else if (allLettersFound && this.word.length !== 0) {
        this.win = true
        this.streak++
      } 
    },
    updateHiddenWord(){
      let temp = []
      this.word.forEach((letter) => {
        if (this.correctGuesses.indexOf(letter) > -1 || letter === " ") {
          temp.push(letter)
        } else {
          temp.push('*')
        }
      })
      this.hiddenWord = temp
    },
    showAnswer(){
      this.loss = true
      this.hiddenWord = this.word
    }
  }
}

