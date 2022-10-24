import { Link } from "react-router-dom";
import s from "./Card.module.scss";

const UICard = ({ item }: any) => {
  const { name, capital, region, flags, population } = item;
  return (
    <div className={s.card}>
      <Link to={`/${name.common}`}>
        <div className={s.card__img}>
          <img src={flags.svg} alt="germany" />
        </div>
        <div className={s.card__content}>
          <h3 className={s.card__title}>{name.common}</h3>
          <p className={s.card__popul}>
            {" "}
            <span>Population:</span>{" "}
            {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
          <p className={s.card__region}>
            {" "}
            <span>Region:</span> {region}
          </p>
          <p className={s.card__capital}>
            {" "}
            <span>Capital:</span> {capital}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default UICard;
