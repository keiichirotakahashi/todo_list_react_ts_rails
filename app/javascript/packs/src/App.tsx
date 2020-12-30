import React, { FC, useState } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { TopPage } from './pages/TopPage';
import { ProjectPage } from './pages/ProjectPage';

export interface FlashType {
  isVisible: boolean;
  status: '' | 'notice' | 'error';
  message: string,
}

const App: FC = () => {
  const initialFlashStatus = '';
  const initialFlashMessage = '';
  const [flash, setFlash] = useState<FlashType>({
    isVisible: false,
    status: initialFlashStatus,
    message: initialFlashMessage,
  });
  let timer: ReturnType<typeof setTimeout> = null;

  const showNoticeFlash = (message: string) => {
    setFlash({
      isVisible: true,
      status: 'notice',
      message,
    });
    removeFlashLater();
  };

  const showErrorFlash = (message?: string) => {
    setFlash({
      isVisible: true,
      status: 'error',
      message: message ? message : 'エラーが発生しました。',
    });
    removeFlashLater();
  };

  const removeFlash = () => {
    setFlash({
      isVisible: false,
      status: initialFlashStatus,
      message: initialFlashMessage,
    });
  };

  const removeFlashNow = () => {
    clearTimeout(timer);
    removeFlash();
  };

  const removeFlashLater = () => {
    timer = setTimeout(() => { removeFlash() }, 3000);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <TopPage
            flash={flash}
            showNoticeFlash={showNoticeFlash}
            showErrorFlash={showErrorFlash}
            removeFlashNow={removeFlashNow} />
        </Route>
        <Route exact path="/projects/:url">
          <ProjectPage
            flash={flash}
            showNoticeFlash={showNoticeFlash}
            showErrorFlash={showErrorFlash}
            removeFlashNow={removeFlashNow} />
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
