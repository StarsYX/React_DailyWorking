import React, { memo, Suspense } from "react";
import type { FC, ReactNode } from "react";
import { Outlet, Link } from "react-router-dom";
import NavBar from "./c-cpns/nav-bar";

interface IProps {
  children?: ReactNode;
}

const Discover: FC<IProps> = () => {
  return (
    <div>
        <NavBar />
        {/* <div>
            <Link to="/discover/recommend">推荐</Link>
            <Link to="/discover/ranking">排行榜</Link>
            <Link to="/discover/songs">歌单</Link>
            <Link to="/discover/djradio">主播电台</Link>
            <Link to="/discover/artist">歌手</Link>
            <Link to="/discover/album">新碟上架</Link>
        </div> */}
        {/* lazy加载时提示 */}
        <Suspense fallback="二级路由懒加载ling...">
            {/* 导航占位 */}
           <Outlet />
        </Suspense>
    </div>
  )
}

export default memo(Discover);
