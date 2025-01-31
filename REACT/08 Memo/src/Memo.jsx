import React from "react";
import { memo } from "react";

const Memo = ({newCount}) => {
    console.log('new Component Render...',newCount);
    
  return (
    <div>
    </div>
  )
}

export default memo(Memo)
