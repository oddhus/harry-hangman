import getWord from '../Words/words'

export function gameStore() {
  // note the use of this which refers to observable instance of the this
  return {
    streak: 0,
    win: false,
    loss: false,
    attempts: 5,
    word: ['h','e','i'],
    hiddenWord: ['h','e','i'],
    correctGuesses: [],
    wrongGuesses: [],
    setNewWord(){
      const word = getWord()
      this.word = word
      this.hiddenWord = word.map(letter => letter !== ' ' ? '*' : ' ')
    },
    startNewRound(){
      this.setNewWord()
      if (this.win) {
        this.streak++
      }
      if (this.loss){
        this.streak = 0
      }
      this.attempts = 5
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
      }
      this.checkWin()
    },
    checkWin() {
      const allLettersFound = this.word.every(letter => this.correctGuesses.includes(letter) || letter === " ")
      if (this.attempts === 0 && !allLettersFound) {
        this.loss = true
      } else if (allLettersFound && this.word.length !== 0) {
        this.win = true
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
    },
    incrementStreak: () => this.streak++,
    resetStreak: () => this.streak = 0
  }
}

