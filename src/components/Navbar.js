import React, {useState, useEffect} from 'react'
import { Grid, Button, Box } from '@material-ui/core'
import PlayerBar from './PlayerBar'
import { useStore } from '../store/store'
import { useObserver } from 'mobx-react'

function NavBar(props) {

  const {game} = useStore()
    const store = useStore()
    const [nyttOrd, setNyttOrd] = useState()
    const [visSvaret, setVisSvaret] = useState()

    useEffect(() => {
        if (game.win){
            setNyttOrd("primary")
        } else if (game.loss) {
            setNyttOrd("primary")
            setVisSvaret("primary")
        } else if (!game.win && !game.loss){
            setNyttOrd("default")
            setVisSvaret("default")
        }  
    }, [game.win, game.loss])

    return useObserver(() => (
      <Box pt={[1.5,2,3]}>
        <Grid container direction="row" justify="space-between" spacing={3} alignItems="center">
          <Grid item xs>
            <Box display="flex" justifyContent="center">
              <Button variant="contained" onClick={store.game.startNewRound} color={nyttOrd} disabled={!(store.game.loss || store.game.win)}>Nytt ord</Button>
            </Box>
          </Grid>
          <Grid item xs>
            <Box display="flex" justifyContent="center">
              <Button variant="contained" onClick={store.game.showAnswer} color={visSvaret} disabled={(store.game.loss || store.game.win)}>Vis svaret</Button>
            </Box>
          </Grid>
          <Grid item xs>
            <Box display="flex" justifyContent="center">
              <PlayerBar submitStreak={props.submitStreak}/>
            </Box>  
          </Grid>
        </Grid>
      </Box>
    ))
}

export default NavBar