import React from "react";


import "./Container.scss";

interface Prop {
  children?: React.ReactNode;
}

const Container = ({ children }: Prop): JSX.Element => {
 
  return (
    <div className="container">
      {children}
    </div>
  );
};

export default Container;
