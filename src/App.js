import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import logo from './assets/kensa_logo.png';

const useStyles = makeStyles((theme) => ({
  //styles go here
  root: {
    flexGrow: 1,
  },
  menuIcon: {
    marginLeft: theme.spacing(1),
  },
  menuText: {
    flexGrow: 1,
    marginRight: theme.spacing(1),
  },
  paper: {
    marginTop: theme.spacing(15),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    marginTop: theme.spacing(2),
    //backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    margin: theme.spacing(1),
  },
  formControl: {
    width: '200px',
    margin: theme.spacing(1),
  },
  textField: {
    width: '200px',
    margin: theme.spacing(1),
  },
  submit: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
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

  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert('submitted!');
  };

  //if (isLoading) return (<div>Loading...</div>)
  return (
    <Container component="main" maxWidth="lg">
      <AppBar position="absolute" color="primary" className={classes.appBar}>
        <Toolbar>
          <img src={logo} className={classes.menuIcon} alt="logo"/>
          <Typography variant="h5" className={classes.menuText} align="right">
            タタキケンサキ
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Paper className={classes.paper}>
        <form className={classes.form}>
          <Grid container
            spacing={1}
            justify="center"
            direction="column"
            alignItems="center"
          >
          
          </Grid>

        </form>
      </Paper>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

/*
TODO:
  1) make footer wit
*/


export default App;