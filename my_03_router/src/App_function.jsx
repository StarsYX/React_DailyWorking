import { Route, Routes, Link, Navigate, useNavigate } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/about"
import NotFound from "./pages/NotFound";

import HomeRecommend from "./pages/HomeRecommend";
import HomeRanking from "./pages/HomeRanking";
import Category from "./pages/Category";
import Order from "./pages/Order";

function App(props) {
    //必须放到顶层才行
    const navigate = useNavigate()

    function btnclick(path) {
        console.log(path);

        navigate(path)
    }
    return (
        <div className="app">
          <div className="header">
            <span>header</span>
            <div className="nav">
              <Link to="/home">首页</Link>
              <Link to="/about">关于</Link>
              <button onClick={e => btnclick("/category")}>分类</button>
              <span onClick={e => btnclick("/order")}>订单</span>
            </div>
            <hr />
          </div>
          <div className="content"> {
            // 映射关系： path=> Component
            <Routes>
              <Route path="/" element={ <Navigate to="/home"/> } />
              <Route path="/home"  element={ <Home /> }>
                <Route path="/home" element={<Navigate to="/home/recommend"/> } />
                <Route path="/home/recommend" element={ <HomeRecommend />} />
                <Route path="/home/ranking" element={ <HomeRanking />} />
              </Route>
              <Route path="/about" element={ <About/> } />
              <Route path="/category" element={ <Category/> } />
              <Route path="/order" element={ <Order/> } />
              <Route path="*" element={ <NotFound />} />
            </Routes>
          }
          </div>
          <div className="footer">
            <hr />
            Footer
          </div>
        </div>
      )
}

export default App;