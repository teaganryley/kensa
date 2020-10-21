import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineSharpIcon from '@material-ui/icons/MailOutlineSharp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
          {' © 著作権 '}
          {new Date().getFullYear()}
          {'.'}          
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    textAlign: 'center',
    //backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    //padding: theme.spacing(6, 0),
  },
}));

export default function Header(props) {
  const classes = useStyles();
  
  return (
    <footer>
      <Grid container className={classes.footer}>
          <Grid item xs={4}>
            <IconButton href="">
              <LinkedInIcon />
            </IconButton>
          </Grid>
          <Grid item xs={4}>
            <IconButton href="">
              <GitHubIcon />
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
  );
}