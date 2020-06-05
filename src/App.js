import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './components/ui/Theme';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/ui/Header';
import Game from './pages/Game';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Game}/>
          <Route exact path="/leaderboard" component={() => <div>services</div>}/>
          <Route exact path="/about" component={() => <div>customsoftware</div>}/>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
