import { PureComponent } from "react";
// 1.引入csstransition
import { CSSTransition } from "react-transition-group"

import "./animate_test.css"

class AnimateTest extends PureComponent {
    constructor(){
        super()

        this.state = {
            isShow: true
        }
    }

    render() {
        const { isShow } = this.state
        return (
            <div>
                <button onClick={() => this.setState({ isShow: !isShow })}>
                    切换
                </button>
                {/* 2. 把组件包括起来 */}
                <CSSTransition in={ isShow } unmountOnExit={true} classNames="testShow" timeout={ 2000 }>
                   <h2>呵呵哒😄</h2>
                </CSSTransition>
               
            </div>
        )
    }
}

export default AnimateTest;