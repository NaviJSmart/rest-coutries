import React, { useEffect, useState } from "react";

import useCountriesAPI from "../../services/useCountriesAPI";
import Skeleton from "../Skeleton/Skeleton";
import UICard from "../UICard/UICard";

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
