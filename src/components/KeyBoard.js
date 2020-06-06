import React, {useState, useEffect} from 'react'
import { Grid, Paper, Typography, Button, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles/'

const useStyles = makeStyles(theme => ({
  paper:{
    padding: theme.spacing(1),
    textAlign: "center",
  },
}));

const letters = Array(26).fill(65).map((x,y) => String.fromCharCode(x+y))
letters.push('Æ', 'Ø', 'Å')

export default function Keyboard(props) {
  const classes = useStyles();

  const [clicked, setClicked] = useState([])

    // useEffect(() => {
    //     if(!props.win && !props.loss){
    //         setClicked([])
    //     }
    // }, [props.win, props.loss])
  
    console.log(clicked)

  return (
        <Grid item xs={12} spacing={3}>
          <Box p={[2,3,4]}>
          <Grid container justify="center" spacing={4}>
            {letters.map((letter, i) => (
                <Box key={`${letter}${i}`} p={[0.5, 1, 2]}>
                  <Button
                    className={classes.paper}
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    onClick={() => console.log(letter)}
                    // disabled={clicked.includes(letter) ? true : false}
                    >
                    <Typography variant="h5">{letter}</Typography>
                  </Button>
                </Box>
                
            ))}
          </Grid>  
          </Box>  
        </Grid>
     
  )
}