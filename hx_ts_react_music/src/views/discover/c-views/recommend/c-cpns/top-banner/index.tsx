import { shallowEqualApp, useAppSelector } from "@/store";
import React, { memo, useRef, ElementRef, useState } from "react";
import type { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from "./style";
import { Carousel } from "antd";

import classNames from "classnames";

interface IProps {
  children?: ReactNode;
}

const TopBanner: FC<IProps> = () => {
    // 定义内部的数据
  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);

    // 从store中获取数据
  const { banners } = useAppSelector((state) => ({
    banners: state.recommend.banners
  }),
  shallowEqualApp
  )

  const handlePrevClick = () => {
    bannerRef.current?.prev();
  }

  const handleNextClick = () => {
    bannerRef.current?.next();
  }

  const handleBeforeChange = () => {
    setCurrentIndex(-1)
  }

  const handleAfterChange = (current: number) => {
    setCurrentIndex(current);
  }

  let bgImageUrl = "";
  if(currentIndex > 0 && banners.length > 0) {
     bgImageUrl = banners[currentIndex]?.imageUrl + '?imageView&blur=40x20';
  }
//   if(bgImageUrl) {
//     bgImageUrl = bgImageUrl + '?imageView&blur=40x20'
//   }

  return (
    <BannerWrapper 
        style={{
            background: `url('${bgImageUrl}') center center/6000px`
        }}
    >
      <div className="banner wrap_v2">
        <BannerLeft>
          <Carousel 
             autoplay
             dots={false}
             effect="fade"
             ref={bannerRef} 
             beforeChange={handleBeforeChange}
             afterChange={handleAfterChange}
          >
            {
              banners.map((item: any) => {
                 return (
                    <div
                        className="banner-item"
                        key={item.imageUrl}
                    > 
                      <img 
                        className="image"
                        src={item.imageUrl} 
                        alt={item.typeTitle} 
                      />
                    </div>
                 )
              })
            }
          </Carousel>
          <ul className="dots">
            {
                banners.map((item, index) => {
                    return (
                        <li key={item.imageUrl}>
                            <span 
                                className={classNames('item', {
                                    active: index === currentIndex
                                })}

                            >

                            </span>
                        </li>
                    )
                })
            }
          </ul>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
            <button className="btn left" onClick={handlePrevClick}></button>
            <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner);
