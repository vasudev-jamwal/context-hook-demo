import React, { useState, Fragment, useReducer } from "react";

export const UseReducerExample = () => {
  const initialState = { theme: "DARK", count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        return { ...state, count: state.count - 1 };
      case "toggleTheme": {
        let newTheme = "DARK";
        if (state.theme === "DARK") {
          newTheme = "LIGHT";
        }
        return { ...state, theme: newTheme };
      }

      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Fragment>
      <p>{`Theme          : ${state.theme}`}</p>
      <p>{`Counter Value  : ${state.count}`}</p>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "toggleTheme" });
        }}
      >
        Toggle Theme
      </button>
    </Fragment>
  );
};
