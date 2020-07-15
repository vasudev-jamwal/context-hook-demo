import React, { useContext } from "react";

//    ContextExample    ->    Parent    ->    ChildA    ->    ChildB / ChildC / ChildD

const CounterContext = React.createContext();

export const ContextExample = () => {
  return <Parent />;
};

const Parent = () => {
  return (
    <CounterContext.Provider value={999}>
      <ChildA />
    </CounterContext.Provider>
  );
};

const ChildA = () => {
  return <ChildB />;
  // return <ChildC />;
  // return <ChildD />;
};

const ChildB = (props) => {
  return (
    <CounterContext.Consumer>
      {(valueFromContext) => (
        <p>{`Value from Consumer -> ${valueFromContext}`}</p>
      )}
    </CounterContext.Consumer>
  );
};

const ChildC = (props) => {
  const value = useContext(CounterContext);
  return <p>{`Value from useContext -> ${value}`}</p>;
};

class ChildD extends React.Component {
  render() {
    const value = this.context;

    return <p>{`Value from contextType -> ${value}`}</p>;
  }
}

ChildD.contextType = CounterContext;
