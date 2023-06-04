import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter} from "react-router-dom";
// redux相关： 2.导入react-redux
import { Provider } from "react-redux";

import { ThemeProvider } from "styled-components";

import App from "@/App";
import 'normalize.css';
import './assets/css/index.less';
import store from './store';
import theme from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // redux相关： 3.使用Provider,通过store即可拿到store
  <Provider store={ store }>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>

);
