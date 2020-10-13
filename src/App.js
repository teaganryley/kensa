import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineSharpIcon from '@material-ui/icons/MailOutlineSharp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import logo from './assets/kensa_logo.png';

const useStyles = makeStyles((theme) => ({
  //styles go here
  root: {
    flexGrow: 1,
    textAlign: 'center'
  },
  toolbarIcon: {
    marginLeft: theme.spacing(1),
  },
  toolBarLink: {
    //flexGrow: 1,
    //marginRight: theme.spacing(1),
    padding: theme.spacing,
  },
  paper: {
    marginTop: theme.spacing(15),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper2: {
    textAlign: 'center',
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {' © 著作権 '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function App() {

  const classes = useStyles();
  /*
  useEffect(()=>{
    fetch('https://deckofcardsapi.com/api/deck/new/')
    .then(result => result.json())
    .then(({ deck_id }) => {
      setDeckID(deck_id);
      setLoading(false);
    })
    .catch(er => console.error(er));
  }, []);
  */

  //if (isLoading) return (<div>Loading...</div>)
  return (
    <Container component="main" maxWidth="lg">
      <AppBar position="absolute" color="primary" className={classes.appBar}>
        <Toolbar>
          <img src={logo} className={classes.menuIcon} alt="logo"/>
          <Link href="" className={classes.toolBarLink} color="inherit">
            天国
          </Link>
          <Link href="" className={classes.toolBarLink} color="inherit">
            地獄
          </Link>
        </Toolbar>
      </AppBar>
      
      <Paper className={classes.paper}>
        <Grid container className={classes.root}>
          <Grid item xs={6}>
            <p>
              this is a story about my old pal toni kensa. he knows the freshest squids and
              he don't afraid of anything. one time i waited in line for 69 hours to get a
              pair of kensa hi-tops. stay of the hook don't get cooked!
            </p>
          </Grid>
          <Grid item xs={6}>
            <p>
              this is a story about my old pal toni kensa. he knows the freshest squids and
              he don't afraid of anything. one time i waited in line for 69 hours to get a
              pair of kensa hi-tops. stay of the hook don't get cooked!
            </p>
          </Grid>
        </Grid>
      </Paper>
      
      <footer>
        <Grid container className={classes.root}>
          <Grid item xs={4}>
            <IconButton href="">
              <GitHubIcon />
            </IconButton>
          </Grid>
          <Grid item xs={4}>
            <IconButton href="">
              <LinkedInIcon />
            </IconButton>
          </Grid>
          <Grid item xs={4}>
            <IconButton href="">
              <MailOutlineSharpIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <Copyright />
          </Grid>
        </Grid>  
      </footer>
    </Container>
  );
}

/*
TODO:
  1) make footer
    -spacing
    -fake links
    -background color

  2) Add content to main
  3) heaven and hell links in the header
  4) routing in header
*/


export default App;