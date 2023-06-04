import React, { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";

import hyRequest from "@/service/index";
import { useAppDispatch } from "@/store";
import { fetchBannerDataAction } from "./store/recommend";
import TopBanner from "./c-cpns/top-banner";

interface IProps {
  children?: ReactNode;
}

export interface IBannerData {
  imageUrl: string;
  targetId: number;
  targetType: number;
  titleColor: string;
  typeTitle: string;
  url: string;
  exclusive: boolean;
  scm: string;
  bannerBiztype: string;
}

const Recommend: FC<IProps> = () => {
  const [banners, setBanners] = useState<IBannerData[]>([])
// 发起action获取数据
  const dispatch = useAppDispatch();

  useEffect(() => {
    // getData()
    dispatch(fetchBannerDataAction());
  }, [])


  // const getData = () => {
  //   hyRequest.get({
  //     url: "/banner",
  //   }).then((res: any) => {
  //     setBanners(res.banners || []);
  //     console.log("--res:",res);
  //   })
  // }

  return (
    <div>
      <TopBanner />
      
      recommend 
    </div>
  )
}

export default memo(Recommend);
