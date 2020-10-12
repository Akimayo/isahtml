import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './libs/bootstrap/bootstrap';
import './libs/i18next';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div className="spinner-border ml-2" />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
