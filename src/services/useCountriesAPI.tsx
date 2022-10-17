import useFetch from "../hooks/useFetch";

const useCountriesAPI = () => {
  const { request, process, setProcess } = useFetch();

  const _base = "https://restcountries.com/v3.1/";

  const getAllCoutries = async (views: [], index: number) => {
    const res = await request(`${_base}all`);
    const data = await res.slice(views.length, index);
    return data;
  };

  const getSingleCountrie = async (name: string) => {
    let res = await request(`${_base}name/${name}`);
    return _transformSingleCountrie(res[0]);
  };

  const getSingleCountrieByCode = async (code: string) => {
    const res = await request(`${_base}alpha/${code}`);
    return res[0].name.common
  };


  const _transformSingleCountrie = (data: any) => {
    return {
      name: Object.values(data.name.nativeName).map(
        (item: any) => item.common
      )[0],
      flags: data.flags.svg,
      population: data.population
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      region: data.region,
      subregion: data.subregion,
      capital: data.capital[0],
      tld: data.tld.join(" "),
      languages: Object.values(data.languages).join(", "),
      currencies: Object.values(data.currencies)
        .map((item: any) => item.name)
        .join(", "),
      borders: data.borders,
    };
  };

  return {
    getAllCoutries,
    process,
    setProcess,
    getSingleCountrie,
    getSingleCountrieByCode,
  };
};

export default useCountriesAPI;
