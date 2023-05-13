import { PureComponent } from "react";

class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      name: "七代目，鸣人"
    }
  }

  render() {
    const { name } = this.state
    return (
      <div>
        { name }
      </div>
    )
  }
}

export default App;
