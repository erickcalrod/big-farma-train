import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // optional, if you have a global stylesheet
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Matches the `div id="root"` in `index.html`
);

