import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles/'

const useStyles = makeStyles(theme => ({
    infoTile:{
      backgroundColor: props => props.color
    }  
  }));

export default function InfoTile(props) {
    const classes = useStyles(props);
    return (
        <Grid item xs={props.size}>
            <Paper className={classes.infoTile}>
                {props.children}
            </Paper>
        </Grid>
    )
}
