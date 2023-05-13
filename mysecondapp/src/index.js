import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./style.css"

import store from './store';
//react-redux 1.引入“react-redux”
import { Provider } from "react-redux"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* //react-redux 2.使用Provider */}
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>
);

