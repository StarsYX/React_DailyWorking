import { PureComponent } from "react";
import { Route, Routes, Link } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/about"
import NotFound from "./pages/NotFound";

class App extends PureComponent {

  render() {
    return (
      <div className="app">
        <div className="header">
          <span>header</span>
          <div className="nav">
            <Link to="/home">首页</Link>
            <Link to="/about">关于</Link>
          </div>
          <hr />
        </div>
        <div className="content"> {
          // 映射关系： path=> Component
          <Routes>
            <Route path="/home"  element={ <Home /> } />
            <Route path="/about" element={ <About/> } />
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
}

export default App;