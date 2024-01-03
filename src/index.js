import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppShell from './AppShell';

console.log('waiting for 3 seconds until hydration...');
setTimeout(() => {
    console.log('hydration called');
    ReactDOM.hydrateRoot(document.getElementById('root'), <AppShell />)
}, 3000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
