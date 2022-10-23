import { useEffect, useState } from "react";
import Error404 from "../../components/404/Error404";
import InputSearch from "../../components/InputSearch";
import InputSelect from "../../components/InputSelect";
import Skeleton from "../../components/Skeleton/Skeleton";
import UICard from "../../components/UICard/UICard";
import useCountriesAPI from "../../services/useCountriesAPI";

import s from "./Countries.module.scss";

const Countries = () => {
  const {
    getAllCoutries,
    getSingleCountrieByName,
    getCountriesByRegion,
    process,
  } = useCountriesAPI();
  const [views, setView] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");
  const [name, setName] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    onRequest();
  }, [name, region]);
  console.log(isError);
  const onRequest = () => {
    setIsLoading(true);
    if (!name && !region) {
      getAllCoutries()
        .then(setView)
        .then(() => setIsLoading(false));
    } else if (name) {
      getSingleCountrieByName(name)
        .then(setView)
        .then(() => setIsLoading(false));
    } else {
      getCountriesByRegion(region)
        .then(setView)
        .then(() => setIsLoading(false))
        .then((e) => setIsError(String(e)));
    }
  };

  const loading = isLoading
    ? [...Array(8)].map((a, i) => <Skeleton key={i} />)
    : null;

  const viewUI = views.map((item: any) => (
    <UICard item={item} key={item.name.common} />
  ));

  const ifError = process ? <Error404 /> : null;
  return (
    <>
      <div className={s.container_input}>
        <InputSearch setName={setName} />
        <InputSelect setRegionName={setRegion} />
      </div>
      <div className={s.container_grid}>
        {loading}
        {ifError}
        {viewUI}
      </div>
      <div className={s.btn_container}>
        {/* <button
          className={s.btn_primary}
          disabled={isLoading}
         
        >
          {isLoading ? "Loading ..." : "Load more"}
        </button> */}
      </div>
    </>
  );
};

export default Countries;
