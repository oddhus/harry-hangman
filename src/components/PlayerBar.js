import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

export default function PlayerBar() {
    const [open, setOpen] = useState(false);
    const { register, handleSubmit, errors } = useForm(); // initialise the hook


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
                <DialogTitle id="form-dialog-title">Lagre Streak</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Lagre streaken din og kanskje så havner du på leaderborden. Advarsel! Dette vil resette streaken til 0.
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

