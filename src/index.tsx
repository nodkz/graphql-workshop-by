import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import App from './pages/_app';
import * as serviceWorker from './serviceWorker';
import { apolloClient } from './apolloClient';

const history = createBrowserHistory();

ReactDOM.render(
  <App history={history} apolloClient={apolloClient} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
