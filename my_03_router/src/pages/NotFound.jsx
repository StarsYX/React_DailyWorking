import { PureComponent } from "react";

export class NotFound extends PureComponent {
    render() {
        return (
            <div>
                <h1>Not Found Page</h1>
                <p>页面不存在呀，请重新请求</p>
            </div>
        )
    }
}

export default NotFound;