import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles/'
import InfoTile from './InfoTile';
import { useStore } from '../store/store';
import { useObserver } from 'mobx-react-lite';

const useStyles = makeStyles(theme => ({
  paper:{
    paddingBottom: theme.spacing(1),
    textAlign: "center"
  }
}));

export default function Status(props) {
  const {game, ui} = useStore()
  const classes = useStyles();

  return useObserver(() => (
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={0}>
            <Grid container spacing={2}>
              <InfoTile color={ui.getStreakColor(game.streak)} size={6}>
                <Typography variant="h5">Streak: {game.streak}</Typography>
              </InfoTile>
              <InfoTile color={ui.getAttemptColor(game.win, game.loss, game.attempts)} size={6}>
                <Typography variant="h5">
                  {game.win ? "Magisk!" :
                    game.loss ? "Trollsnørr!" :
                      `${game.attempts} forsøk igjen`}</Typography>
              </InfoTile>
            </Grid>
          </Paper>           
      </Grid>
  ))
}
