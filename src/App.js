import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

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
      <Main />
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