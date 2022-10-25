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
    getCountrieByName,
    getCountriesByRegion,
    process,
    setProcess,
  } = useCountriesAPI();

  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [region, setRegion] = useState("");

  const [views, setViews] = useState<{}[]>([]);
  const [index, setIndex] = useState(views.length + 8);

  useEffect(() => {
    onRequest();
    return () => {
      setData(null);
      setViews([]);
      setIndex(8);
    };
  }, [name, region]);

  useEffect(() => {
    onLoadMore(data);
  }, [index, data]);

  const onRequest = () => {
    setIsLoading(true);
    setProcess(false);
    if (!name && !region) {
      getAllCoutries()
        .then(setData)
        .then(() => setIsLoading(false));
    } else if (name) {
      getCountrieByName(name)
        .then(setData)
        .then(() => setIsLoading(false));
    } else {
      getCountriesByRegion(region)
        .then(setData)
        .then(() => setIsLoading(false));
    }
  };

  const onLoadMore = async (data: any) => {
    if (data) {
      const sli = await data.slice(views.length, index);
      setViews([...views, ...sli]);
    }
  };

  const loading = isLoading
    ? [...Array(8)].map((a, i) => <Skeleton key={i} />)
    : null;

  const viewUI = views
    ? views.map((item: any) => <UICard item={item} key={item.name.common} />)
    : null;

  const ifError = process ? <Error404 /> : null;
  return (
    <>
      <div className={s.container_input}>
        <InputSearch setName={setName} />
        <InputSelect setRegionName={setRegion} />
      </div>
      <div className={s.container_grid}>
        {!process && loading}
        {ifError}
        {viewUI}
      </div>
      <div className={s.btn_container}>
        {data && data.length !== views.length ? (
          <button
            className={s.btn_primary}
            disabled={isLoading}
            onClick={() => setIndex(index + 8)}
          >
            Load more
          </button>
        ) : null}
      </div>
    </>
  );
};

export default Countries;
