import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import 'material-components-web/dist/material-components-web.min.css';
import './index.css'; // Global CSS
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
  apiKey: "AIzaSyDHGRJnE7gr6W25_f9B6yzw6N3LU-JPB2A",
  databaseURL: "https://bbq-arduino.firebaseio.com/",
  projectId: "bbq-arduino",
  authDomain: "bbq-arduino.firebaseapp.com"
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
