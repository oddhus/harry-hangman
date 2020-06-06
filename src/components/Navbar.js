import React, {useState, useEffect} from 'react'
import { Grid, Button } from '@material-ui/core'

function NavBar(props) {

    const [nyttOrd, setNyttOrd] = useState()
    const [visSvaret, setVisSvaret] = useState()
    const [visDisabled, setVisDisabled] = useState(false)
    const [nyttDisabled, setNyttDisabled] = useState(false)

    useEffect(() => {
        if (props.win){
            setNyttOrd("primary")
            setVisDisabled(true)
            setNyttDisabled(false)
        } else if (props.loss) {
            setNyttOrd("primary")
            setVisSvaret("primary")
            setNyttDisabled(false)
        } else if (!props.win && !props.loss){
            setNyttOrd("default")
            setVisSvaret("default")
            setVisDisabled(false)
            setNyttDisabled(true)
        }
        
    }, [props.win, props.loss])

    return (
        <Grid container direction="row" justify="space-evenly" alignItems="center">
          <Button variant="contained" onClick={props.newWord} color={nyttOrd} disabled={nyttDisabled}>Nytt ord</Button>
          <Button variant="contained" onClick={props.showAnswer} color={visSvaret} disabled={visDisabled}>Vis svaret</Button>
        </Grid>
    )
}

export default NavBar