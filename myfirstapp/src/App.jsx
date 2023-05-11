import { Component } from 'react';
import TabControl from './tabControl';
import logRenderTime from './resumeTime/log_render_time';
// import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      titles: ["流行", "新款", "精4选"],
      tabIndex: 0
    }
  }

  tabClick(index) {
    this.setState({ tabIndex: index })
  }

  render() {
    const { titles } = this.state
    const { tabIndex } = this.state

    return (
      <div className='app'>
        {/* <logRenderTime(TabControl) titles={ titles} tabClick={i => this.tabClick(i)} /> */}
          <TabControl  titles={ titles } tabClick={i => this.tabClick(i)} />
          <h1>{ titles[tabIndex] }</h1>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           // 规定当前文档与目标 URL 之间的关系。仅在 href 属性存在时使用。
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
