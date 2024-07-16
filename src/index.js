import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // تأكد من استيراد أي ملفات CSS تحتاجها

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

