import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles/'
import { AppBar, Toolbar, Button, useScrollTrigger, Tabs, Tab } from '@material-ui/core'

import logo from '../../assets/HarryHangmanLogo.svg'
import { Link } from 'react-router-dom'

function ElevationScroll(props) {
  const { children } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

const useStyles = makeStyles(theme => ({
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em"
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em"
    }
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  menu: {
    backgroundColor: theme.palette.common.arcBlue,
    color: "white",
    borderRadius: "0px"
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px"
  },
  tabContainer: {
    marginLeft: 'auto',
    marginRight: "25px"
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em"
    }
  }
}))

const routes = [
  {name: "Play", link: "/"},
  {name: "LeaderBoard", link: "/leaderboard"},
  {name: "About", link: "/about"},
]



function Header() {
  const classes = useStyles()

  const [value, setValue] = useState(0)


  const tabs = (
    <React.Fragment>
      <Tabs 
        value={value}
        onChange={(e, value) => setValue(value)}
        className={classes.tabContainer}
        indicatorColor="secondary"
      >
        {routes.map(route => (
          <Tab
            className={classes.tab}
            component={Link}
            key={route.link}
            label={route.name}
            to={route.link}
          />
        ))}
      </Tabs>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button component={Link} to="/" className={classes.logoContainer}>
              <img src={logo} alt="Harry Hangman Logo" className={classes.logo} />
            </Button>
            {tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}/>
    </React.Fragment>
  )
}

export default Header
