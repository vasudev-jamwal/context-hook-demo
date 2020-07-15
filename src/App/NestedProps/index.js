import React from "react";


// NestedProps  -->     Parent      -->     ChildA      -->     ChildB


export const NestedProps = () => {
  return <Parent />;
};

const Parent = () => {
  const theme = 'DARK';

  return <ChildA theme={theme} />;
};

const ChildA = (props) => {
  return <ChildB theme={props.theme} />;
};

const ChildB = (props) => {
  return <p>{`Current Theme ->  ${props.theme}`}</p>;
};
