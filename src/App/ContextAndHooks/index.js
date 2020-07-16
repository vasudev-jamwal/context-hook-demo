import React, {useReducer, Fragment, useContext, createContext} from "react";

const StateContext = createContext();
const DispatchContext = createContext();

const initialState = {
    count: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {count: state.count + 1};
        case "decrement":
            return {count: state.count - 1};
        default:
            throw new Error();
    }
};

export const ContextAndHookExample = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                <App/>
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
};

const useStore = () => {
    const context = useContext(StateContext);

    if (context === undefined) {
        throw new Error("useStore must be used within a StateContext.Provider");
    }

    return context;
};

const useDispatch = () => {
    const context = useContext(DispatchContext);

    if (context === undefined) {
        throw new Error(
            "useDispatch must be used within a DispatchContext.Provider"
        );
    }

    return context;
};

const App = () => {
    return <Parent/>;
};

const Parent = () => {
    return <Child/>;
};

const Child = () => {
    const state = useStore();
    const dispatch = useDispatch();
    return (
        <Fragment>
            <p>{`Counter Value - ${state.count}`}</p>
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
        </Fragment>
    );
};
