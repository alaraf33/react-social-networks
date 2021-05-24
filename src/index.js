import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dialogs from "./componets/Dialogs/Dialogs";
import state from './redax/state';


ReactDOM.render(
  <React.StrictMode>
        <App state={state} />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
