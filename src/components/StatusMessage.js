import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { useStore } from '../store/store';
import { useObserver } from 'mobx-react-lite';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function CustomizedSnackbars(props) {
    const classes = useStyles();
    const { game } = useStore()

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        game.isAdded = false
        game.errorMessage = null
    };

    const successMessage = (
        <Snackbar open={game.isAdded} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
                Scoren ble lagt til leaderboardet
            </Alert>
        </Snackbar>
    )

    const errorMessage = (
        <Snackbar open={game.errorMessage} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                Det skjedde noe feil! {game.errorMessage}
            </Alert>
        </Snackbar>
    )

    return useObserver(() => (
        <div className={classes.root}>
            {game.isAdded ? successMessage : errorMessage}
        </div>
    ))
}