import { PureComponent } from "react";
import "./switch_animate.css"

import { CSSTransition, SwitchTransition } from "react-transition-group"

class Switch_animate extends PureComponent {
    constructor() {
        super()

        this.state = {
            isSwitch: true
        }
    }
    render() {
        const { isSwitch } = this.state
        return (
            <div>
                <SwitchTransition mode="out-in">
                    <CSSTransition
                        key={ isSwitch ? "exit": "switch"}
                        classNames={"isSwitch"}
                        timeout={1000}
                    >
                        <button onClick={ e => this.setState({ isSwitch: !isSwitch })}>
                            { isSwitch ? "切换": "我退出" }
                        </button>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        )
    }
}

export default Switch_animate;