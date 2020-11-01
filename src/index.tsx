import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './libs/bootstrap/bootstrap';
import './libs/i18next';
import './index.scss';
import { Progress } from './components/Progress';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Progress />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
