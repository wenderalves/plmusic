import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// import reportWebVitals from './reportWebVitals';
const baseUrl = process.env.REACT_APP_BASE_URL;

// <base href="https://www.ajornadadoprogramador.com.br/plmusic/">
document.addEventListener('DOMContentLoaded', () => {
  const baseTag = document.createElement('base');
  baseTag.href = baseUrl;
  document.head.prepend(baseTag);
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
