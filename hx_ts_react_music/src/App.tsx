import React, { Suspense } from 'react';
import { useRoutes, Link } from 'react-router-dom';
import routes from './router';

import { useAppSelector, useAppDispatch, shallowEqualApp } from "./store";
import { changeMessageAction } from "./store/modules/counter";

// import { useSelector, shallowEqual } from 'react-redux';
// import store from './store';
// 方案1；
// import { IRootState} from './store';
// function App() {
//   const { count, message } = useSelector((state: IRootState) => ({
//     count: state.counter.count,
//     message: state.counter.message,
//   }),
//   shallowEqual
//   )

// 方案二：
function App() {
  const { count, message, address } = useAppSelector((state) => ({
    count: state.counter.count,
    message: state.counter.message,
    address: state.counter.address,
  }),
  shallowEqualApp
  )

  // 事件处理函数
  const dispatch = useAppDispatch()

  const handleChangeMessage = () => {
    console.log("--修改数据ling...")
    dispatch(changeMessageAction("吃我一记螺旋丸."))
  }

  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <h2> 当前记数:{ count } </h2>
      <h2> 当前message:{ message } </h2>
      <h2> 当前地址:{ address } </h2>
      <button onClick={ handleChangeMessage }>点我message</button>
      {/* 分包时，未下载下来前提示 */}
      <Suspense fallback="loading...">
        <div className='main'>{ useRoutes(routes) }</div>
      </Suspense>
    </div>
  );
}

export default App;
