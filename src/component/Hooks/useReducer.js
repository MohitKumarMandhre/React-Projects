import React, { useReducer } from "react";
import "./style.css";

const reducer= (state, action) => {
    if (action.type === 'INCR'){
        state = state + 1;
    }
    else if (state > 0 && action.type === 'DECR'){
        state = state - 1;
    }
    return state;
}

const UseReducer = () => {
    // const [count, setCount] = useState(0);
    const[state, dispatch] = useReducer(reducer, 0)

  return (
    <>
      <div className="center_div" >
        <h3 >MKM-Counter</h3>
        <p>{ state }</p>
        <div class="button2" onClick={ () => {
            dispatch({ type : 'INCR' })
        } }>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div class="button2" onClick={ () => {
            dispatch({ type : 'DECR' })
        } } >
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

export default UseReducer;