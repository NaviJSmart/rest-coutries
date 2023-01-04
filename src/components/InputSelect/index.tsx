import { useState, useEffect, useRef } from "react";
import s from "./InputSelect.module.scss";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
const regions = ["Asia", "Africa", "Europe", "Oceania", "Americas"];
const InputSelect = ({ setRegionName }: any) => {
  const [region, setRegion] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setRegionName(region);
  }, [region, setRegionName]);

  useEffect(() => {
    const checkIfClickedOutside = (e: Event) => {
      if (
        e.target instanceof Element &&
        isOpen &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", checkIfClickedOutside);

    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [isOpen]);

  const stylez = isOpen ? "block" : "none";
  const onHandleClick = (reg: string) => {
    setRegion(reg);
    setIsOpen(false);
  };
  return (
    <div className={s.input_select} ref={ref}>
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
