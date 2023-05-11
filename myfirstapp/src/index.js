import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import logRenderTime from './resumeTime/log_render_time';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


export default logRenderTime(App)