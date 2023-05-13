import React, { PureComponent } from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'

//react-redux 3.使用时导入connect
import { connect } from "react-redux"

export class App extends PureComponent {
  render() {
    const { counter } = this.props
    return (
      <div>
        <h2>App Counter: { counter }</h2>
        <div className="pages">
          <Home />
          <Profile />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter
})

//react-redux 4.使用时导入connect
export default connect(mapStateToProps)(App)
// export default App


// import { PureComponent } from "react";

// class App extends PureComponent {
//   constructor() {
//     super()

//     this.state = {
//       name: "七代目，鸣人"
//     }
//   }

//   render() {
//     const { name } = this.state
//     return (
//       <div>
//         { name }
//       </div>
//     )
//   }
// }
