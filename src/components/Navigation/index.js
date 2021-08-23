
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Backdrop from '@material-ui/core/Backdrop';
import './nav.scss'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    overlay: {
      display: 'block',
      width: '100%'
    }
  }));

const Nav = () => {
    const classes = useStyles();
    const [showMenu, toggleShowMenu] = useState(false)

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon onClick={() => toggleShowMenu(!showMenu)}/>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Overlay open={showMenu} toggle={toggleShowMenu}/>
      </div>
    )
}

const Overlay = ({open, toggle}) => {
  const classes = useStyles();

  return (
    <div className={`overlay ${open ? classes.overlay : ''}`}>
      <a class="closebtn" onClick={() => toggle(false)}>&times;</a>
      <div className="overlay-content">
        <a href="/">Welcome</a>
        <a href="/timeline">Timeline</a>
        <a href="/menu">Menu</a>
      </div>
    </div>
  )
}

export default Nav