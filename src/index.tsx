import React from 'react';
import ReactDOM from 'react-dom';
import InitRoute from '@/routes'
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './styles/normalize.css'; // 初始化css样式
import 'antd/dist/antd.css'; // antd样式

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <InitRoute />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
