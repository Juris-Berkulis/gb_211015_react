import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import {Message as App} from './components/Message';
import reportWebVitals from './reportWebVitals';

const message = 'Какой-то длинный текст!!!';

ReactDOM.render(
  <React.StrictMode>
    <App text={message}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
