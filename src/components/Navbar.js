import React from 'react'
import { Grid, Button, Box } from '@material-ui/core'
import PlayerBar from './PlayerBar'
import { useStore } from '../store/store'
import { useObserver } from 'mobx-react-lite'
import firebase from '../firebase/firebase'

function NavBar() {
  const { game, ui } = useStore()

  function submitStreak(data) {
    game.errorMessage = null
    if (game.streak > 0 && !game.isAdded) {
      firebase.db.collection('scores').add({
        username: data.username,
        streak: game.streak,
        created: new Date(),
        totalAttempts: game.totalAttempts,
      }).then(() => {
        game.isAdded = true
        game.startNewRound()
      }).catch((error) => {
        game.errorMessage = error.message
      }).finally(()=> {
        game.isAdded = false
      })
    }
  }

  return useObserver(() => (
    <Box pt={[1.5, 2, 3]}>
      <Grid container direction="row" justify="space-between" spacing={3} alignItems="center">
        <Grid item xs>
          <Box display="flex" justifyContent="center">
            <Button variant="contained" onClick={game.startNewRound} color={ui.nyttOrdButton(game.loss, game.win)} disabled={!(game.loss || game.win)}>Nytt ord</Button>
          </Box>
        </Grid>
        <Grid item xs>
          <Box display="flex" justifyContent="center">
            <Button variant="contained" onClick={game.showAnswer} color="default" disabled={(game.loss || game.win)}>Vis svaret</Button>
          </Box>
        </Grid>
        <Grid item xs>
          <Box display="flex" justifyContent="center">
            <PlayerBar submitStreak={submitStreak} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  ))
}

export default NavBar