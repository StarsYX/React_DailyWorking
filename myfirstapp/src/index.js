import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import logRenderTime from './resumeTime/log_render_time';
import { TestFragment } from './fragment/testFragMent';
import AnimateTest from './05_react动画实现/animate_test';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    {/* <TestFragment /> */}
    
    <AnimateTest />
  </React.StrictMode>
);


export default logRenderTime(App)