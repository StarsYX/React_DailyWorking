import React, { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";

import hyRequest from "@/service/index";

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

  useEffect(() => {
    getData()
  }, [])


  const getData = () => {
    hyRequest.get({
      url: "/banner",
    }).then((res: any) => {
      setBanners(res.banners || []);
      console.log("--res:",res);
    })
  }

  return (
    <div> 
      {
        banners.map((item, index) => {
          return (
            <div key={index}> { item.imageUrl}</div>
          )
        })
      }
    </div>
  )
}

export default memo(Recommend);
