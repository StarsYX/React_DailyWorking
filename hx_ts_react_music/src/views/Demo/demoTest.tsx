import React, { FC, memo } from "react";
import type { ReactNode } from "react";

interface IProps {
    children?: ReactNode;
    name: string;
    age?: number;
    height: number;
}

const DownLoad:FC<IProps> = (props) => {
    return (
        <div>
            <div>name: { props.name }</div>
            <div>age: { props.age }</div>
            <div>height: { props.height }</div>
            <div>{ props.children }</div>
        </div>
    )
}

DownLoad.displayName = "哈哈哈哈哈哈嘿呦😂"

export default memo(DownLoad);