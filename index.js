import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // If you have a global stylesheet
import App from './App'; // Assuming you have an App.js component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This is the root div in your public/index.html
);

reportWebVitals();
