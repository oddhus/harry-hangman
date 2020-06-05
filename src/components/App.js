import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './ui/Theme';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './ui/Header';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>}/>
          <Route exact path="/leaderboard" component={() => <div>services</div>}/>
          <Route exact path="/about" component={() => <div>customsoftware</div>}/>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
