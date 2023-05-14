import React from 'react'
import { useRoutes } from "react-router-dom"
import routes from './router'
// import Download from './views/download'
// import Daily_test from './views/daily_test'

function App() {
  return (
    <div className="App">
     {/* <Daily_test name='hx' age={18}>
      <div>哈哈哈😂</div>
      <div>嘿嘿嘿</div>
     </Daily_test> */}
     <div className='main'>{ useRoutes(routes)}</div>
    </div>
  )
}

export default App
