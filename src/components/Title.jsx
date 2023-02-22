import React from "react";

const Title = (props) => {
  return <div>
    <div>{props.title}</div>
    <div>{props.description}</div>
  </div>;
};

export default Title;
