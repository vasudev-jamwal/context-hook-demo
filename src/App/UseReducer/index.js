import React, {useState, Fragment, useReducer} from "react";

export const UseReducerExample = () => {
    const initialState = {theme: "DARK", count: 0};

    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return {...state, count: state.count + 1};
            case "decrement":
                return {...state, count: state.count - 1};
            case "toggleTheme": {
                let newTheme = "DARK";
                if (state.theme === "DARK") {
                    newTheme = "LIGHT";
                }
                return {...state, theme: newTheme};
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
            <button type="button" className="btn btn-primary"
                    onClick={() => {
                        dispatch({type: "increment"});
                    }}
            >
                Increment
            </button>
            <button type="button" className="btn btn-primary"
                    onClick={() => {
                        dispatch({type: "decrement"});
                    }}
            >
                Decrement
            </button>
            <button type="button" className="btn btn-primary"
                    onClick={() => {
                        dispatch({type: "toggleTheme"});
                    }}
            >
                Toggle Theme
            </button>
        </Fragment>
    );
};
