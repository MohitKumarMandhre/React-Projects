import React, { useState } from "react";
import "./style.css";

const UseState = () => {
    const [count, setCount] = useState(0);

  return (
    <>
      <div className="center_div" >
        <h3 >MKM-Counter</h3>
        <p>{ count }</p>
        <div class="button2" onClick={ () => setCount(count+1) }>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div class="button2"  onClick={ () => count ? setCount(count-1) : setCount(0) } >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseState;