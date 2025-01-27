import React from "react";

const Memo = ({newCount}) => {
    console.log('new Component Render...',newCount);
    
  return (
    <div>
    </div>
  )
}

export default React.memo(Memo)
