import React from 'react'
import { Container, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles/'


const useStyles = makeStyles(theme => ({
    paper:{
      padding: theme.spacing(2),
    }
  }));

export default function About() {
    const classes = useStyles()

    return (
        <Container maxWidth="sm">
            <Paper className={classes.paper}>
                <Typography variant="h4">Om appen</Typography>
                <Typography variant="body1">Appen er laget av Oddmund Huseby og Sondre har valgt ut ordene.</Typography>
            </Paper>
        </Container>
    )
}
