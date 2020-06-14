import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { useStore } from '../store/store';

export default function PlayerBar(props) {
    const store = useStore()
    const [open, setOpen] = useState(false);
    const [streak, setStreak] = useState(props.streak)
    const { register, handleSubmit } = useForm(); // initialise the hook
    const [disableButton, setDisableButton] = useState(true)

    useEffect(() => {
        setDisableButton(store.streak === 0)
    }, [store.streak])

    useEffect(() => {
      setOpen(false)
    }, [props.isAdded])

    useEffect(() => {
        if(!props.isAdded && props.loss && props.streak !== 0){
            setOpen(true)
        }
    }, [props.isAdded, props.loss, props.streak])

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

    return (
        <React.Fragment>
            <Button variant="contained" color="secondary" onClick={handleClickOpen} disabled={disableButton}>
                Lagre Streak
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Lagre Streak</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Du har en streak på {store.streak}. Kanskje du havner du på leaderborden :).<br></br>
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
    )
}

