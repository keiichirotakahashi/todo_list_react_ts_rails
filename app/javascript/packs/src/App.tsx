import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Top } from './pages/Top';

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/app">
          <Top />
        </Route>
      </Switch>
    </Router>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  );
});
