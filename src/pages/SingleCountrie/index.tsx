import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Error404 from "../../components/404/Error404";
import BorderCountrie from "../../components/BorderCountrie";
import Spinner from "../../components/Spinner";
import useCountriesAPI from "../../services/useCountriesAPI";
import s from "./SingleCountrie.module.scss";

const SingleCountrie = () => {
  const { getSingleCountrie, process } = useCountriesAPI();
  const { nameId } = useParams();
  
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    onRequest();
    return () => {
      setData(null);
    };
  }, [nameId]);

  const onRequest = () => {
    if (nameId) {
      setIsLoading(true);
      getSingleCountrie(nameId)
        .then((res) => setData(res))
        .then(() => setIsLoading(false))
        .catch((e) => console.log(e));
    }
  };

  const loading = isLoading ? <Spinner /> : null;
  const isError = process ? <Error404 /> : null;
  return (
    <div className={s.container}>
      <div className={s.btn_back}>
        <Link to="/">
          <span>&#8592;</span> Back
        </Link>
      </div>

      {!process && loading}
      {isError}
      {data && (
        <div className={s.countrie__wrapper}>
          <div className={s.countrie__img}>
            <img src={data.flags} alt={nameId} />
          </div>
          <div className={s.countrie__content}>
            <h2 className={s.countrie__title}>{data.name}</h2>
            <div className={s.countrie__items}>
              <div className={s.countrie__items_1}>
                <p>
                  <span>Native Name: </span>
                  {data.nativeName}
                </p>
                <p>
                  <span>Population: </span>
                  {data.population}
                </p>
                <p>
                  <span>Region: </span>
                  {data.region}
                </p>
                <p>
                  <span>Sub Region: </span>
                  {data.subregion}
                </p>
                <p>
                  <span>Capital: </span>
                  {data.capital}
                </p>
              </div>
              <div className={s.countrie__items_1}>
                <p>
                  <span>Top Level Domain: </span>
                  {data.tld}
                </p>
                <p>
                  <span>Currencies: </span>
                  {data.currencies}
                </p>
                <p>
                  <span>Languages: </span>
                  {data.languages}
                </p>
              </div>
            </div>
            <div className={s.countrie__borders}>
              <p>Border Countries: </p>
              <div className={s.countrie__bor}>
                {(data.borders &&
                  data.borders.map((bor: string) => (
                    <BorderCountrie border={bor} key={bor} />
                  ))) ||
                  <p>There is no border</p>
                  }
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleCountrie;
