import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css'; // Importing Tailwind CSS for styling
import App from './App';
import { Provider } from 'react-redux'; // Importing Provider for Redux
import store from './store'; // Importing the Redux store
import { BrowserRouter as Router } from 'react-router-dom'; // Importing Router for routing

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
