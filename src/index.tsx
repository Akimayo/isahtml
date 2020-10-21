import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

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
