import React, { memo } from "react"
// 此里面“ReactNode”只是用作类型用，因此前面加上type提高编辑器
import type { FC, ReactNode } from "react"

interface IProps {
    children?: ReactNode
    name: string
    age: number
    height?: number
}

//1. 对props进行约束
// const DailyTest = (props: IProps) => {
//     return (
//         <div>
//           <div>name: { props.name}</div>
//           <div>age: { props.age }</div>
//         </div> 
//     )
// }

// 2. 函数式组件 (FC:简写)， 此种方式以前React.FC<IProps>里面默认
//有children属性，现在需要手动添加
const DailyTest: FC<IProps> = (props) => {
// const DailyTest: React.FC<IProps> = (props: IProps) => {
// const Download: React.FunctionComponent<IProps> = (props: IProps) => {
    return (
        <div>
          <div>name: { props.name}</div>
          <div>age: { props.age }</div>
          <div>height: { props.height }</div>
          <div>{ props.children }</div>
        </div> 
    )
}

//此种方式导出的性能不是很高，
// export default DailyTest;
//即使props没发生改变，到时候组件也可能会重新渲染，所以导出组件时用memo包裹
export default memo(DailyTest);