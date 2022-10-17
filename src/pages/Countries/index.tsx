import { useEffect, useState } from "react";
import Skeleton from "../../components/Skeleton/Skeleton";
import UICard from "../../components/UICard/UICard";
import useCountriesAPI from "../../services/useCountriesAPI";

import s from "./Countries.module.scss";

const Countries = () => {
  const { getAllCoutries } = useCountriesAPI();
  const [views, setView] = useState<any>([]);
  const [index, setIndex] = useState<number>(8);
  const [isLoading, setIsLoading] = useState(true);
console.log(views);
  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = () => {
    setIsLoading(true);
    getAllCoutries(views, index)
      .then(onLoadMore)
      .then(() => setIsLoading(false));
  };

  const onLoadMore = (newData: any) => {
    setView([...views, ...newData]);
    setIndex(index + 8);
  };

  const loading = isLoading
    ? [...Array(8)].map((a, i) => <Skeleton key={i} />)
    : null;

  const viewUI = views.map((item: any) => (
    <UICard item={item} key={item.name.common} />
  ));
  return (
    <>
      <div className={s.container_grid}>
        {loading}
        {viewUI}
      </div>
      <div className={s.btn_container}>
        <button
          className={s.btn_primary}
          disabled={isLoading}
          onClick={() => onRequest()}
        >
          {isLoading ? "Loading ..." : "Load more"}
        </button>
      </div>
    </>
  );
};

export default Countries;
