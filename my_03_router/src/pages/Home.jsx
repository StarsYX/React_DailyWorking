import React, { PureComponent } from 'react'
import { Link, Outlet, useNavigate } from "react-router-dom"

// import { withRouter } from "../hoc"

export class Home extends PureComponent {
  btnClicked(path) {
    const { navigate } = this.props.router
    navigate(path)
  }

  render() {
    return (
      <div>
            <h1>Home Page</h1>
            <div className="home-nav">
                <Link to="/home/recommend">推荐</Link>
                <Link to="/home/ranking">排行榜</Link>
                <button onClick={ e => this.btnClicked("/home/songmenu")}>歌单</button>
            </div>

            {/* 占位的组件 */}
            <Outlet />
      </div>
    )
  }
}

//高阶组件
function withRouter(wrapperComponent) {
  return function(props) {
    const navigate = useNavigate()
    const router = {navigate }
    return <wrapperComponent {...props} router={ router } />
  }
}

export default withRouter(Home)