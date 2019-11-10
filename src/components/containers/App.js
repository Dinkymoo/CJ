import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/contact" component={Landing} />
      <Route exact path="/home" component={Landing} />
    </Switch>
  </BrowserRouter>
);

export default App;
