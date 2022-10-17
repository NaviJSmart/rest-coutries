import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import countries from "i18n-iso-countries";

import s from "./BorderCountrie.module.scss";

function BorderCountrie({ border }: any) {
  countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
  const [name, setName] = useState(() => countries.getName(border, "en"));
  console.log(name)

  return (
    <Link className={s.link__btn} to={`/${name}`}>
      {name}
    </Link>
  );
}

export default BorderCountrie;
