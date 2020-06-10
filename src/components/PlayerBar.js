import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import firebase from '../firebase/firebase'

export default function PlayerBar(props) {
    const [open, setOpen] = useState(false);
    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const [streak, setStreak] = useState(props.streak)
    const [disableButton, setDisableButton] = useState(false)
    const [isAdded, setIsAdded] = useState(false)

    useEffect(() => {
        setStreak(props.streak)
        setDisableButton(props.streak === 0)
    }, [props.streak])

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const onSubmit = (data) => {
        if (streak > 0 && !isAdded){
            console.log("hi")
            firebase.db.collection('scores').add({
                username: 'test',
                streak,
                created: new Date()
            }).then(() => {
                console.log("added")
                setOpen(false)
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    return (
        <div>
            <Button variant="contained" color="secondary" onClick={handleClickOpen} disabled={disableButton}>
                Lagre Streak
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Lagre Streak</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Lagre streaken din på {streak} - kanskje havner du på leaderborden :).<br></br>
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
                    <Button onClick={handleSubmit(onSubmit)} color="primary">
                        Add score
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

