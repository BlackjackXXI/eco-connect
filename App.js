import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './pages/Header';
import Home from './pages/Home';
import Forum from './pages/Forum';

const App = () => (
  <Router>
    <Header />
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/forum" component={Forum} />
      </Switch>
    </main>
  </Router>
);

export default App;
