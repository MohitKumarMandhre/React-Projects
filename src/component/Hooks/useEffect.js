import React, { useState, useEffect } from "react";
import "./style.css";

const UseEffect = () => {
    const [count, setCount] = useState(0);
    useEffect( () => {
        document.title= `Chats(${count})`;
    });

  return (
    <>
      <div className="center_div" >
        <h3 >MKM-Counter</h3>
        <p>{ count }</p>
        <div class="button2 " onClick={ () => setCount(count+1) }>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
      </div>
    </>
  );
};

export default UseEffect;