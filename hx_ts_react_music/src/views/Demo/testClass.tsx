import React, { PureComponent } from "react";

interface IProps {
    name: string;
    age?: number;
}

interface IState {
    message: string;
    count: number; 
}

class AAA extends PureComponent<IProps, IState> {
    state = {
        message: 'hello hehe',
        count: 100
    }

    constructor(props: IProps) {
        super(props);
    }


    render() {
        return (
            <div>
                <p>{ this.props.name}</p>
                哈哈6666还好
            </div>
        )
    }
}

export default AAA;