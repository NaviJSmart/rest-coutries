import { useState } from "react";
import { Link } from "react-router-dom";
import countries from "i18n-iso-countries";

import s from "./BorderCountrie.module.scss";

function BorderCountrie({ border }: any) {
  countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
  const [name] = useState(() => countries.getName(border, "en"));

  return (
    <>
      {name ? (
        <Link className={s.link__btn} to={`/${name}`}>
          {name}
        </Link>
      ) : null}
    </>
  );
}

export default BorderCountrie;
