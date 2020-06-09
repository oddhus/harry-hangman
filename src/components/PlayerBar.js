import React, { useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

export default function PlayerBar(props) {
    const [open, setOpen] = useState(false);
    const [streak, setStreak] = useState(props.streak)
    const { register, handleSubmit, errors } = useForm(); // initialise the hook

    useEffect(() => {
      setStreak(props.streak)
    }, [props.streak])

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <Button variant="contained" color="secondary" onClick={handleClickOpen}>
                Lagre Streak
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Lagre scoren din</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Du har en streak på {streak}! Det kan kanskje gi deg en pallplassering. Advarsel! Dette vil resete streaken din.
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

