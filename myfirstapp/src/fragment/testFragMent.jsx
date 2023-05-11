import React, {PureComponent, Fragment} from "react";

export class TestFragment extends PureComponent {
    
    render() {
        return (
            //Fragment 不会有外层的div
            // <Fragment>
            //     <h2>我是Fragment的标题</h2>
            //     <p>我是App的内容， 真的哦</p>
            // </Fragment>
            <>
               <h2>我是Fragment哈哈的标题</h2>
               <p>我是App的内容， 真的哦</p>
            </>
        )
    }
}