import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles/'
import { AppBar, Toolbar, Button, useScrollTrigger, Tabs, Tab, useMediaQuery, IconButton, SwipeableDrawer, List, ListItem, ListItemText, useTheme } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

import logo from '../../assets/HarryHangmanLogo.svg'

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
  appbar: {
    zIndex: theme.zIndex.modal + 1
  },
  drawer: {
    backgroundColor: theme.palette.common.hpRed
  },
  drawerIcon:{
    height: "40px",
    width: "40px"
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  drawerItem: {
    color: "white",
    opacity: 0.7
  },
  drawerItemSelected: {
    "&.Mui-selected": {
      backgroundColor: theme.palette.common.hpGold,
    },
    "& .MuiListItemText-root": {
      opacity: 1
    }    
  },
  logo: {
    height: "6em",
    [theme.breakpoints.down("md")]: {
      height: "5em"
    },
    [theme.breakpoints.down("xs")]: {
      height: "4em"
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
    marginBottom: "1.7em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "1.2em"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1em"
    }
  }
}))

const routes = [
  {name: "Play", link: "/", activeIndex: 0},
  {name: "LeaderBoard", link: "/leaderboard", activeIndex: 1},
  {name: "About", link: "/about", activeIndex: 2},
]

function Header() {
  const classes = useStyles()
  const theme = useTheme()
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const matches = useMediaQuery(theme.breakpoints.down("sm"))

  const [value, setValue] = useState(0)
  const [openDrawer, setOpenDrawer] = useState(false)

  useEffect(() => {
    const pathname = window.location.pathname;
    const valueIndex = routes.findIndex(option => option.link === pathname);

    setValue(valueIndex === -1 ? 1 : valueIndex);
  }, []);

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

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS}
      classes={{paper: classes.drawer}} 
      onClose={() => setOpenDrawer(false)}
      onOpen={() => setOpenDrawer(true)}
      open={openDrawer}
      >
        <div className={classes.toolbarMargin}/>
        <List disablePadding>
          {routes.map(route => (
            <ListItem 
            button
            classes={{selected: classes.drawerItemSelected}}
            component={Link} 
            divider 
            key={route.link}
            onClick={() => {setOpenDrawer(false); setValue(route.activeIndex)}} 
            selected={value === route.activeIndex} 
            to={route.link}
          >
            <ListItemText
              className={classes.drawerItem} 
            >
            {route.name}
            </ListItemText>
          </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon className={classes.drawerIcon}/>
      </IconButton>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button component={Link} to="/" className={classes.logoContainer}>
              <img src={logo} alt="Harry Hangman Logo" className={classes.logo} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}/>
    </React.Fragment>
  )
}

export default Header
