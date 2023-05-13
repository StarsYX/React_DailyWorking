import React, { PureComponent } from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>App Counter: 0</h2>
        <div className="pages">
          <Home />
          <Profile />
        </div>
      </div>
    )
  }
}

export default App


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
