import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Landing from './Landing';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Landing} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/:portfolio" component={Portfolio} />
    </Switch>
  </BrowserRouter>
);

export default App;
