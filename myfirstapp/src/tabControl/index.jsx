import { Component } from "react";

import "./tabcontrol.css"
import logRenderTime from "../resumeTime/log_render_time";

class TabControl extends Component {
    constructor() {
        super()

        this.state = {
            currIndex: 0
        }
    }

    itemClick(index) {
        this.setState({ currIndex: index }) 
        this.props.tabClick(index)  
    }

    render() {
        const { titles } = this.props
        const { currIndex } = this.state

        return (
            <div className="tab-control">
                {
                    titles.map((item, index) => {
                        return (
                            <div 
                              className={ `item ${index === currIndex ? 'active' : ""} `} 
                              key={item}
                              onClick={ e => this.itemClick(index) }
                            >
                                <span className="text"> { item }</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
} 

export default TabControl;
// export default logRenderTime(TabControl)