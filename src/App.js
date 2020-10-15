import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import Header from './components/Header';
import Footer from './components/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  paragraph: {
    //padding: theme.spacing(2),
    border: 'solid',
  },
}));

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
      
      <Header />
      
      <Paper className={classes.paper}>
        <Grid container className={classes.root}>
          <Grid item xs={6}>
            <Typography variant="subtitle1" className={classes.paragraph}>
              this is a story about my old pal toni kensa. he knows the freshest squids and
              he don't afraid of anything. one time i waited in line for 69 hours to get a
              pair of kensa hi-tops. stay off the hook don't get cooked!
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <p>
              this is a story about my old pal toni kensa. he knows the freshest squids and
              he don't afraid of anything. one time i waited in line for 69 hours to get a
              pair of kensa hi-tops. stay off the hook don't get cooked!
            </p>
          </Grid>
        </Grid>
      </Paper>
      
      <Footer />
      
    </Container>
  );
}

/*
TODO:
  0) refactor:
    -prop-Types for each component?

  1) footer:
    -link behaviour
    -background color? transparent

  2) Add content to main
  4) routing in header
  5) scaling... fluid containers or fixed? 
      -maxwidth
      -header links are closer to right hand
*/

export default App;