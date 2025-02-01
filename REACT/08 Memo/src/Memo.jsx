import React from "react";
import { memo } from "react";
const Memo = ({count}) => {
    console.log("new Component Render")
  return (
    <div>
      <h1> Count :{count}</h1>
    </div>
  )
}

export default  memo(Memo);