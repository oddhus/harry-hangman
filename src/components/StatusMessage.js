import React, { useState, useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { useStore } from '../store/store';
import { useObserver } from 'mobx-react-lite';
import { autorun } from 'mobx';

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

export default function CustomizedSnackbars() {
    const classes = useStyles();
    const { game } = useStore()
    const [open, setOpen] = useState(false)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false)
    }

    useEffect(() => 
      autorun(() => {
        if (game.isAdded || game.errorMessage){
          setOpen(true)
        }
      }), []
    )

    const successMessage = (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
                Scoren ble lagt til leaderboardet
            </Alert>
        </Snackbar>
    )

    const errorMessage = (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                Det skjedde noe feil! {game.errorMessage}
            </Alert>
        </Snackbar>
    )

    return useObserver(() => (
        <div className={classes.root}>
            {!game.errorMessage ? successMessage : errorMessage}
        </div>
    ))
}