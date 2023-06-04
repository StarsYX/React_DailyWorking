import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const AppFooter: FC<IProps> = () => {
  return (
    <div>
        <h2> AppFooter 页面</h2>
     </div>
  )
}

export default memo(AppFooter);
