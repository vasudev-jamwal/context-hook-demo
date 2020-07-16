import React, { useState, Fragment } from "react";

export const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <p>{`Counter Value : ${count}`}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount - 1);
        }}
      >
        Decrement
      </button>
    </Fragment>
  );
};
