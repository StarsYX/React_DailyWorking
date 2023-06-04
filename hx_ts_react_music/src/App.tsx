import React, { Suspense, useEffect } from 'react';
import { useRoutes, Link } from 'react-router-dom';
import routes from './router';
import { Divider } from "antd";

import { useAppSelector, useAppDispatch, shallowEqualApp } from "./store";
import { changeMessageAction } from "./store/modules/counter";

import hyRequest from "./service/index"
import AAA from './views/Demo/testClass';

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

  useEffect(() => {
    // getList();
    // getData();
  }, [])

  // const getList = () => {
  //   hyRequest.request({
  //     url:"/lyric?id=500665346"
  //   }).then(res => {
  //     console.log("--请求结果呀:",res);
  //   })
  // }

  const getData = () => {
    hyRequest.get({
      url: "/banner",
    }).then((res: any) => {
      console.log("--res:",res);
    })
  }
  

  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
    
      {/* 分包时，未下载下来前提示 */}
      <Suspense fallback="loading...">
        <div className='main'>{ useRoutes(routes) }</div>
      </Suspense>
      
      <Divider />
       {/* <h2> 当前记数:{ count } </h2>
      <h2> 当前message:{ message } </h2>
      <h2> 当前地址:{ address } </h2> */}
      <AAA name='666990'></AAA>
      <button onClick={ handleChangeMessage }>点我message</button>
    </div>
  );
}

export default App;
