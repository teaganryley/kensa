import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

import logo from './assets/kensa_logo.png';

const useStyles = makeStyles((theme) => ({
    toolbarIcon: {
      //marginLeft: theme.spacing(1),
    },
    toolBarLink: {
      //flexGrow: 1,
      //marginRight: theme.spacing(1),
      padding: theme.spacing(4),
    },

}));

export default function Header(props) {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <React.Fragment>
      <AppBar position="absolute" color="primary" className={classes.appBar}>
        <Toolbar>
          <Grid 
            container
            direction="row"
            alignItems="center"
            alignContent="flex-start"
          >
            <Grid item xs={8}>
              <img src={logo} className={classes.toolbarIcon} alt="logo"/>
            </Grid>
            <Grid 
              container
              item
              justify="flex-end"
              xs={4}
            >
              <Grid item xs={4}>
                <Link 
                  href="" 
                  color="inherit"
                  variant="h5"
                  className={classes.toolBarLink} 
                  onClick={preventDefault}
                >
                天
                </Link>
              </Grid>
              <Grid item xs={4}>
                <Link
                  href="" 
                  color="inherit"
                  variant="h5"
                  className={classes.toolBarLink} 
                  onClick={preventDefault}
                >
                  土
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}