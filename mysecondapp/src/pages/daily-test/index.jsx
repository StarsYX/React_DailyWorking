import { PureComponent } from "react";

import css from "./index.css";


class Index extends PureComponent {

    render() {
        return (
            <div>
                <div class={css.firstName}>
                    test ddd yu
                </div>
                <p class={css.hahah}>送法进水电费拉风</p>
            </div>
        )
    }
}

export default Index;