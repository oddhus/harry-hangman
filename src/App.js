import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './components/Theme';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Game from './pages/Game';
import LeaderBoard from './pages/LeaderBoard';
import About from './pages/About';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Game}/>
          <Route exact path="/leaderboard" component={LeaderBoard}/>
          <Route exact path="/about" component={About}/>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
