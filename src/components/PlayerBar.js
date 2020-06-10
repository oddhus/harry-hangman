import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

export default function PlayerBar(props) {
    const [open, setOpen] = useState(false);
    const [streak, setStreak] = useState(props.streak)
    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const [disableButton, setDisableButton] = useState(false)

    useEffect(() => {
        setStreak(props.streak)
        setDisableButton(props.streak === 0)
    }, [props.streak])

    useEffect(() => {
      setOpen(false)
    }, [props.isAdded])

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color="secondary" onClick={handleClickOpen} disabled={disableButton}>
                Lagre Streak
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Lagre Streak</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Du har en streak på {streak}. Kanskje du havner du på leaderborden :).<br></br>
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
                    <Button onClick={handleSubmit(props.submitStreak)} color="primary">
                        Add score
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

