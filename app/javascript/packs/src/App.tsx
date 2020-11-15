import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TopPage } from './pages/TopPage';
import { ProjectPage } from './pages/ProjectPage';

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/app">
          <TopPage />
        </Route>
        <Route exact path="/app/projects/:url">
          <ProjectPage />
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
