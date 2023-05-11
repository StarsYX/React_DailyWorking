import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './App';
import logRenderTime from './resumeTime/log_render_time';
import { TestFragment } from './fragment/testFragMent';
import AnimateTest from './05_react动画实现/animate_test';
import Switch_animate from './06_切换动画/switch_animate';
import TransItest from './07_transition动画/transition_itest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    {/* <TestFragment /> */}
    
    {/* <AnimateTest /> */}
    {/* <Switch_animate /> */}
    
    <TransItest />

  </React.StrictMode>
);


export default logRenderTime(App)