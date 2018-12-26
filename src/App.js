import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomeScreen from './layouts/HomeScreen';
import './App.css';
import { SnackbarProvider } from 'notistack';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
     primary: {
        light: '#188279',
        main: '#23bbad',
        dark: '#4fc8bd'
     },
     secondary: {
       main: '#8e24aa',
     },
  },
  typography: { 
     useNextVariants: true
  }
});

class App extends Component {
  render () {
    return (
      <MuiThemeProvider theme = { theme }>
        <SnackbarProvider maxSnack={3}>
          <BrowserRouter>
            <HomeScreen />
          </BrowserRouter>
        </SnackbarProvider>
      </MuiThemeProvider>
    );
  }
}

export default App;
