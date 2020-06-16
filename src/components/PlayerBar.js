import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { useStore } from '../store/store';
import { autorun } from 'mobx';
import { useObserver } from 'mobx-react-lite';

export default function PlayerBar(props) {
    const { game } = useStore()
    const [open, setOpen] = useState(false);
    const { register, handleSubmit } = useForm(); // initialise the hook

    useEffect(() =>
        autorun(() => {
            if (game.isAdded) {
                setOpen(false)
            }
        }),
      [] // note empty dependencies
    )

    useEffect(() =>
        autorun(() => {
            if (!game.isAdded && game.loss && game.streak !== 0) {
                setOpen(true)
            }
        }),
      [], // note empty dependencies
    )

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onClick = (data) => {
        handleClose()
        props.submitStreak(data)
    }

    return useObserver(() => (
        <React.Fragment>
            <Button variant="contained" color="secondary" onClick={handleClickOpen} disabled={game.streak === 0 || game.isAdded}>
                Lagre Streak
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Lagre Streak</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Du har en streak på {game.streak}. Kanskje du havner du på leaderborden :).<br></br>
                        Advarsel! Dette vil resette streaken til 0.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="username"
                        label="Username"
                        inputRef={register({ required: true })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit(onClick)} color="primary">
                        Add score
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    ))
}

