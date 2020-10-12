import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#090809',
    },
    secondary: {
      main: '#F40000',
    },
    background: {
      default: '#fff',
    },
    //type: "light",
  },
});

export default theme;