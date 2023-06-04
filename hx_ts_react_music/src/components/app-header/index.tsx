import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Link, NavLink } from 'react-router-dom';
import { HeaderLeft, HeaderRight, HeaderWrapper } from "./style";
import "../../assets/css/index.less";

import headerTitles from '@/assets/data/header_titles.json';


interface IProps {
  children?: ReactNode;
}

const AppHeader: FC<IProps> = () => {
  // 定义组件内部状态

  // 组件展示逻辑
  function showItem(item: any) {
    if(item.type === 'path') {
      // return <Link to={item.link}> { item.title }</Link>
      // 导航按钮选中状态 用NavLink，其内部有状态，
      return (
        <NavLink 
        to={item.link}
        className={({isActive}) => {
          return isActive ? 'active' : undefined;
        }}
      >
        { item.title }
        <i className="icon sprite_01"></i>
      </NavLink>
      )
    }else {
      return (
        <a href={ item.link } rel="noreferrer" target="_blank">
           { item.title } 
        </a>
      )
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap_v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="/">
            网易云音乐
          </a>
          <div className="title_list">
            {
              headerTitles.map((item) => {
                return (
                  <div className="item" key={item.title}>
                    { showItem(item) }
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input 
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />} 
          />
          <span className="center">创作者中心</span>
          <span className="login">登录</span>
        </HeaderRight>

        {/* <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link> */}
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader);
