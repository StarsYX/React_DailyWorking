import { PureComponent } from "react";

class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      name: "七代目，涡旋鸣人"
    }
  }

  render() {
    const { name } = this.state
    return (
      <div className="app">
        <div className="header">
          Header
          <hr />
        </div>
        <div className="content">
          内容区域
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