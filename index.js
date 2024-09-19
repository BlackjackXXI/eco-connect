import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';  // Import your CSS file
import App from './App';

// Render the main App component to the root div
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
