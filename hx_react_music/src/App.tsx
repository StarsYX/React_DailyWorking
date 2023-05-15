import React, { Suspense } from 'react'
import { useRoutes, Link } from "react-router-dom"
import routes from './router'



function App() {
  return (
    <div className="App">
     {/* <Daily_test name='hx' age={18}>
      <div>哈哈哈😂</div>
      <div>嘿嘿嘿</div>
     </Daily_test> */}
     <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
     </div>
     <Suspense fallback="loading...">
        <div className='main'>{ useRoutes(routes)}</div>
     </Suspense>
    </div>
  )
}

export default App
