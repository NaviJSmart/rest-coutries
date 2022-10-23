import React, { useState, useEffect } from "react";
import s from "./InputSelect.module.scss";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
const regions = ["Asia", "Africa", "Europe", "Oceania", "Americas", "Polar"];
const InputSelect = ({ setRegionName }: any) => {
  const [region, setRegion] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    setRegionName(region);
  }, [region]);

  const stylez = isOpen ? "block" : "none";
  const onHandleClick = (reg: string) => {
    setRegion(reg);
    setIsOpen(false);
  };
  return (
    <div className={s.input_select}>
      <div
        className={s.input_select_wrapper}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{region || "Filter by Region"}</span>
        <Arrow width="18px" height="18px" />
      </div>

      <ul style={{ display: `${stylez}` }}>
        {regions.map((item, i) => (
          <li key={i} onClick={() => onHandleClick(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InputSelect;
